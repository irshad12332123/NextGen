import { useCallback, useState } from "react";

export function useApi(baseURL) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = useCallback(
    async (endpoint = "", method = "GET", body = null) => {
      setLoading(true);
      setError(null);
      try {
        // fetching the eventss
        const response = await fetch(`${baseURL}${endpoint}`, {
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
    [baseURL]
  );

  const refetch = useCallback(() => fetchData(), [fetchData]);

  return { data, loading, error, fetchData, refetch };
}
