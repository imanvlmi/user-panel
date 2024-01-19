import { AxiosResponse } from "axios";

import { axiosInstance } from "@/services/config/axios";
import { user } from "@/services/urls/user";

const getUserApi = async () => {
  const response: AxiosResponse = await axiosInstance.get(user.getUser);

  return response.data;
};

export default getUserApi;
