import { useParams } from "react-router-dom";
import useQuery from "../hook/useQuery";
import { getDetail } from "../service/productService";
import { useEffect } from "react";
import Header from "../components/common/Header";

const ProductDetail = () => {
  const { id } = useParams();
  const { data: product } = useQuery(() => getDetail(id));

  return (
    <div>
      <p>{product?.title}</p>
    </div>
  );
};

export default ProductDetail;
