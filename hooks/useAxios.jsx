import axios from "axios";
import { useSelector } from "react-redux";

const useAxios = () => {
  const BASE_URL = "https://akm-backend.vercel.app/";

  const { token } = useSelector((state) => state.settings);

  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
  });

  const axiosWithToken = axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Token ${token}`,
      Accept: "/*",
      "Content-Type": "application/json",
    },
  });

  return { axiosInstance, axiosWithToken };
};

export default useAxios;
