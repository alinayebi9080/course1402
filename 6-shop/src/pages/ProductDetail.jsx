import { useParams } from "react-router-dom";
import useQuery from "../hook/useQuery";
import { getDetail } from "../service/productService";

const ProductDetail = () => {
  const { id } = useParams();
  const { data: product, error, loading } = useQuery(() => getDetail(id));

  if (loading) return <p>LOADING ....</p>;
  if (error) return <p>{error.response.statusText}</p>;

  return <div>{product?.title}</div>;
};

export default ProductDetail;
