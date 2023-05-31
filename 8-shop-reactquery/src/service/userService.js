import axios from "axios";

export const login = async (body) => {
  const { data } = await axios.post(`/api/user/login`, body);
  return data;
};

export const getUserProfile = async () => {
  const { data } = await axios.get(`/api/user/profile`);
  return data;
};
