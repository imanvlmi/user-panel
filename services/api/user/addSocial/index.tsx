import { axiosInstance } from "@/services/config/axios";
import { user } from "@/services/urls/user";
import { IAddSocialApi } from "./types";

export const addSocialApi = async (requestBody: IAddSocialApi) => {
  const response = await axiosInstance.post(user.addSocial, requestBody);

  return response;
};
