import { useEffect, useState } from "react";

const useQuery = (func, dep = []) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState();

  const handleGetData = async () => {
    setLoading(true);
    try {
      const data = await func();
      setData(data);
    } catch (err) {
      setError(err.response.statusText);
    }
    setLoading(false);
  };

  useEffect(() => {
    handleGetData();
  }, dep);

  return { error, loading, data };
};

export default useQuery;
