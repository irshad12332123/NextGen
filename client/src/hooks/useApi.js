import { useCallback, useState } from "react";
import { BASE_URL } from "@/api/api";
export function useApi() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = useCallback(
    async (endpoint = "", method = "GET", body = null) => {
      setLoading(true);
      setError(null);
      try {
        // fetching the events
        const response = await fetch(`${BASE_URL}${endpoint}`, {
          method: method,
          headers: {
            "Content-Type": "application/json",
          },
          body: body ? body : null,
        });

        const result = await response.json();
        setData(data);
        return result;
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    },
    [BASE_URL]
  );

  const refetch = useCallback(() => fetchData(), [fetchData]);

  return { data, loading, error, fetchData, refetch };
}
