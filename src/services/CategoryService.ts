import { apiUrl } from "../constants/common.constants";
import { Category } from "../models/Category";
import { apiService } from "./auth/ApiService";

export const CategoryService = {
  list: async () => apiService.get(`${apiUrl}/categories`),
  create: async (data: Category) =>
    apiService.post(`${apiUrl}/categories`, data),
  update: async (data: Category) =>
    apiService.put(`${apiUrl}/categories/${data.id}`, data),
  delete: async (data: Category) =>
    apiService.delete(`${apiUrl}/categories${data.id}`, data),
};
