import axiosInstance from "../util/axiosInstance";

export const login = async (body) => {
  const { data } = await axiosInstance.post(`/user/login`, body);
  return data;
};

export const getUserProfile = async () => {
  const { data } = await axiosInstance.get(`/user/profile`);
  return data;
};
