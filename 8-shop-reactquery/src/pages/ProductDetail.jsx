import { useParams } from "react-router-dom";
import { useProductDetail } from "../hook/useProduct";

const ProductDetail = () => {
  const { id } = useParams();
  const { data: product } = useProductDetail(id);

  return (
    <div>
      <p>{product?.title}</p>
    </div>
  );
};

export default ProductDetail;
