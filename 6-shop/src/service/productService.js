import axios from "axios";

export const getDetail = async (id) => {
  const { data } = await axios.get(`/api/product/${id}`);
  return data;
};

export const getDetails = async (ids) => {
  const result = [];
  for (let id of ids) {
    const data = await getDetail(id);
    result.push(data);
  }
  return result;
};

export const getAllProduct = async (page) => {
  const { data } = await axios.get(`/api/product/all?page=${page}`);
  return data;
};
