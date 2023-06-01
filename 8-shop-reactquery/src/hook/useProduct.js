import { useQuery } from "@tanstack/react-query";
import {
  getAllProduct,
  getDetail,
  getDetails,
} from "../service/productService";

export const useProducts = (page) => {
  return useQuery({
    queryFn: () => getAllProduct(page),
    queryKey: ["product", page],
    keepPreviousData: true,
  });
};

export const useBasketDetail = (basket) => {
  return useQuery({
    queryFn: () => getDetails(basket),
    queryKey: ["basket"],
  });
};

export const useProductDetail = (id) => {
  return useQuery({
    queryFn: () => getDetail(id),
    queryKey: ["product", "detail", id],
  });
};
