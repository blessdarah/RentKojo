import { apiUrl } from "../constants/common.constants";
import { Category } from "../models/Category";
import { apiService } from "./auth/ApiService";

export const CategoryService = {
  list: async (): Promise<Category[]> => apiService.get(`${apiUrl}/categories`),
  create: async (data: Category): Promise<Category> =>
    apiService.post(`${apiUrl}/categories`, data),
  update: async (data: Category): Promise<Category> =>
    apiService.put(`${apiUrl}/categories/${data.id}`, data),
  delete: async (data: Category): Promise<Category> =>
    apiService.delete(`${apiUrl}/categories${data.id}`, data),
};
