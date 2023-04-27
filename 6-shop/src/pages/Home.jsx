import Product from "../components/home/Product";
import Pagination from "../components/common/Pagination";
import useQuery from "../hook/useQuery";
import { getAllProduct } from "../service/productService";
import { useState } from "react";

const Home = () => {
  const [page, setSelectedPage] = useState(0);

  const { data, loading, error } = useQuery(() => getAllProduct(page), [page]);

  if (loading) return <p>LOADING ....</p>;
  if (error) return <p>{error.response.statusText}</p>;

  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        {data?.data.map((item) => (
          <Product {...item} key={item._id} />
        ))}
      </div>
      <Pagination
        pageCount={data?.totalPage}
        onPageChange={(page) => setSelectedPage(page.selected)}
      />
    </div>
  );
};

export default Home;
