import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail";
import MainLayout from "./layout/MainLayout";
import Factor from "../pages/Factor";
import { lazy } from "react";
const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));

const MainRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/factor" element={<Factor />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MainRouter;
