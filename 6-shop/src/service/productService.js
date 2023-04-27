import axios from "axios";

export const getDetail = async (id) => {
  const { data } = await axios.get(`/api/product/${id}`);
  return data;
};

export const getAllProduct = async (page) => {
  const { data } = await axios.get(`/api/product/all?page=${page}`);
  return data;
};
