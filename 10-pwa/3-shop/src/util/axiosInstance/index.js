import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_API,
  withCredentials: true,
});

export default axiosInstance;
