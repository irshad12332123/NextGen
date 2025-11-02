import { useCallback, useState } from "react";
import { BASE_URL } from "@/api/api";

export function useApi() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(
    async (endpoint = "", method = "GET", body = null) => {
      setLoading(true);
      setError(null);
      console.log(method);
      try {
        const token = localStorage.getItem("token");

        const response = await fetch(`${BASE_URL}${endpoint}`, {
          method,
          headers: {
            "Content-Type": "application/json",
            ...(token && { Authorization: `Bearer ${token}` }),
          },
          body: body ? JSON.stringify(body) : null,
        });

        const result = await response.json();
        setData(result);
        return result;
      } catch (error) {
        setError(error.message);
        return { success: false, message: error.message };
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const refetch = useCallback(
    (endpoint = "", method = "GET", body = null) => {
      return fetchData(endpoint, method, body);
    },
    [fetchData]
  );

  return { data, loading, error, fetchData, refetch };
}
