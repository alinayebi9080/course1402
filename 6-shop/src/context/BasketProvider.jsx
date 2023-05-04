import { createContext, useEffect, useState } from "react";

export const BasketContext = createContext({
  addToBasket: () => {},
});

const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    // read basket from server
  }, []);

  const addToBasket = (_id) => {
    //service call
    setBasket([...basket, _id]);
  };

  return (
    <BasketContext.Provider value={{ basket, setBasket, addToBasket }}>
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
