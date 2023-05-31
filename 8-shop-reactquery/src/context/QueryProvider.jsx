import { createContext, useState } from "react";
import useEffectAfterRender from "../hook/useEffectAfterRender";
import { toast } from "react-hot-toast";

export const QueryContext = createContext();

const QueryProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffectAfterRender(() => {
    if (error.config.url === "/api/user/profile") return;
    if (error?.data?.message) toast.error(error.data.message);
    else toast(error?.statusText);
  }, [error]);

  return (
    <QueryContext.Provider value={{ error, loading, setError, setLoading }}>
      {children}
    </QueryContext.Provider>
  );
};

export default QueryProvider;
