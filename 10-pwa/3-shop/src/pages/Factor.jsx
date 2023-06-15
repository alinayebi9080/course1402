import { useContext } from "react";
import { BasketContext } from "../context/BasketProvider";
import { useBasketDetail } from "../hook/useProduct";
import { useProfile } from "../hook/useUser";
import { Navigate } from "react-router";

const Factor = () => {
  const { basket } = useContext(BasketContext);

  const { data: factor = [] } = useBasketDetail(basket);

  const { data: user } = useProfile();

  if (!user) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div>
      {factor.map((item) => (
        <p>{item.title}</p>
      ))}
    </div>
  );
};

export default Factor;
