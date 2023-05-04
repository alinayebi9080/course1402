import { useEffect, useState } from "react";
import axis from "axios";
const useAxios = (url, method = "get", body) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState();

  const handleGetData = async () => {
    try {
      if (method === "get") {
        let { data } = await axis.get(url);
        setData(data);
      } else if (method === "post") {
        let { data } = await axis.post(url, body);
        setData(data);
      }
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return;
};

export default useAxios;
