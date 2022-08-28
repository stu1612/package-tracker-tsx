// npm
import { useState, useEffect } from "react";

export default function useFetch(url: string) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState<boolean | null>(null);
  const [error, setError] = useState<boolean | string | null>(null);

  useEffect(() => {
    async function fetchURL(url: string) {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        console.log(data);
        setLoading(false);
        setError(null);
      } catch (err) {
        setLoading(false);
        if (err instanceof Error) {
          setError(err.message);
        }
      }
    }
    fetchURL(url);
  }, [url]);

  return { data, loading, error };
}
