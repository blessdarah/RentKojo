import { apiUrl } from "../constants/common.constants";
import { Tag } from "../models/Tag";
import { apiService } from "./auth/ApiService";

export const TagService = {
  list: async () => apiService.get(`${apiUrl}/tags`),
  create: async (data: Tag) => apiService.post(`${apiUrl}/tags`, data),
  update: async (data: Tag) =>
    apiService.put(`${apiUrl}/tags/${data.id}`, data),
  delete: async (data: Tag) =>
    apiService.delete(`${apiUrl}/tags${data.id}`, data),
};
