import { createContext, useEffect, useState } from "react";
import useQuery from "../hook/useQuery";
import { getUserProfile } from "../service/userService";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { data: user, setData: setUser } = useQuery(getUserProfile);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
