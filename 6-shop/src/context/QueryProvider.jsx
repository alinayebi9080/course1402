import { createContext, useEffect, useState } from "react";
import useEffectAfterRender from "../hook/useEffectAfterRender";
import { toast } from "react-hot-toast";

export const QueryContext = createContext();

const QueryProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffectAfterRender(() => {
    toast.error(error?.statusText);
  }, [error]);

  return (
    <QueryContext.Provider value={{ error, loading, setError, setLoading }}>
      {children}
    </QueryContext.Provider>
  );
};

export default QueryProvider;
