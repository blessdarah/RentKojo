import { apiUrl } from "../constants/common.constants";
import { ApiResponse } from "../models/ApiResponse";
import { Tag } from "../models/Tag";
import { apiService } from "./auth/ApiService";

export const TagService = {
  list: async (): Promise<ApiResponse<Tag[]>> =>
    apiService.get(`${apiUrl}/tags`),
  create: async (data: Tag): Promise<ApiResponse<Tag>> =>
    apiService.post(`${apiUrl}/tags`, data),
  update: async (data: Tag): Promise<ApiResponse<Tag>> =>
    apiService.put(`${apiUrl}/tags/${data.id}`, data),
  delete: async (data: Tag): Promise<ApiResponse<Tag>> =>
    apiService.delete(`${apiUrl}/tags/${data.id}`),
};
