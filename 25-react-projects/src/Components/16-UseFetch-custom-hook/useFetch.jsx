import React, { useEffect, useState } from "react";

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url, { ...options });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const result = await response.json();
      setData(result);
      setError(null);
      setLoading(false);
    } catch (error) {
      setError(`${error}. some Error Occured`);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);
  return { data, error, loading };
};

export default useFetch;
