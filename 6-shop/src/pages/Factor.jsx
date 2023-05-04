import { useContext } from "react";
import { BasketContext } from "../context/BasketProvider";
import useQuery from "../hook/useQuery";
import { getDetails } from "../service/productService";

const Factor = () => {
  const { basket } = useContext(BasketContext);

  const { data: factor = [] } = useQuery(() => getDetails(basket));

  console.log(factor);
  return (
    <div>
      {factor.map((item) => (
        <p>{item.title}</p>
      ))}
    </div>
  );
};

export default Factor;
