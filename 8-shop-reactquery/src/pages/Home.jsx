import Product from "../components/home/Product";
import Pagination from "../components/common/Pagination";
import useQuery from "../hook/useQuery";
import { getAllProduct } from "../service/productService";
import { useContext, useState } from "react";
import { BasketContext } from "../context/BasketProvider";

const Home = () => {
  const [page, setSelectedPage] = useState(0);

  const { addToBasket } = useContext(BasketContext);

  const { data } = useQuery(() => getAllProduct(page), [page]);

  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {data?.data.map((item) => (
            <Product {...item} key={item._id} handleAddToBasket={addToBasket} />
          ))}
        </div>
        <Pagination
          pageCount={data?.totalPage}
          onPageChange={(page) => setSelectedPage(page.selected)}
        />
      </div>
    </>
  );
};

export default Home;
