import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Loading from "../common/Loading";

const MainLayout = () => {
  return (
    <>
      <Loading />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
