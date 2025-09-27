import { useEffect, useState } from "react";

export const useFetch = (callback, params = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const safeParams = Array.isArray(params) ? params : [];

    callback(...safeParams)
      .then((res) => setData(res))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [callback, ...(Array.isArray(params) ? params : [])]);

  return { data, loading, error };
};
