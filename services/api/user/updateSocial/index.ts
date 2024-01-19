import { axiosInstance } from "@/services/config/axios";
import { user } from "@/services/urls/user";
import { IUpdateSocial } from "./types";

export const updateSocialApi = async (requestBody: IUpdateSocial) => {
  const response = await axiosInstance.put(user.updateSocial, requestBody);

  return response;
};
