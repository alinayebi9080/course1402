import axios from "axios";

export const getUserInfo = async ({ queryKey }) => {
  const { data } = await axios.get(
    `http://localhost:8080/users/${queryKey[1]}`
  );
  return data;
};

export const getUsers = async () => {
  const { data } = await axios.get("http://localhost:8080/users");
  return data;
};

export const createUser = async (body) => {
  const { data } = await axios.post("http://localhost:8080/users", body);
  return data;
};

export const getUsersByPage = async (page) => {
  const { data } = await axios.get(
    `http://localhost:8080/users?_limit=2&_page=${page}`
  );
  return data;
};
