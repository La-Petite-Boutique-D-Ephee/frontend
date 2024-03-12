/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

export function useFetch(url, options = {}) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        "Content-Type": "application/json",
        Accept: "application/json; charset=UTF-8",
      },
    })
      .then((r) => r.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    loading,
    data,
    error,
  };
}
