import { useContext, useEffect, useState } from "react";
import { QueryContext } from "../context/QueryProvider";

const useQuery = (func, dep = []) => {
  const [data, setData] = useState();

  const { setError, setLoading, error, loading } = useContext(QueryContext);

  const handleGetData = async () => {
    setLoading(true);
    try {
      const data = await func();
      setData(data);
    } catch (err) {
      setError(err?.response);
    }
    setLoading(false);
  };

  useEffect(() => {
    handleGetData();
  }, dep);

  return { error, loading, data, setData };
};

export default useQuery;
