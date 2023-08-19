import { apiUrl } from "../constants/common.constants";
import { ApiResponse } from "../models/ApiResponse";
import { Category } from "../models/Category";
import { apiService } from "./auth/ApiService";

export const CategoryService = {
  list: async (): Promise<ApiResponse<Category[]>> =>
    apiService.get(`${apiUrl}/categories`),
  create: async (data: Category): Promise<ApiResponse<Category>> =>
    apiService.post(`${apiUrl}/categories`, data),
  update: async (data: Category): Promise<ApiResponse<Category>> =>
    apiService.put(`${apiUrl}/categories/${data.id}`, data),
  delete: async (data: Category): Promise<ApiResponse<Category>> =>
    apiService.delete(`${apiUrl}/categories/${data.id}`, data),
};
