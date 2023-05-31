import { useContext, useEffect, useState } from "react";
import { QueryContext } from "../context/QueryProvider";

const useMutation = (func, onSuccess) => {
  const [data, setData] = useState();

  const { setError, setLoading, error, loading } = useContext(QueryContext);

  const mutate = async (body) => {
    setLoading(true);
    try {
      const data = await func(body);
      onSuccess(data);
      setData(data);
    } catch (err) {
      setError(err?.response);
    }
    setLoading(false);
  };

  return { error, loading, data, mutate };
};

export default useMutation;
