import { apiUrl } from "../constants/common.constants";
import { ApiResponse } from "../models/ApiResponse";
import { Product } from "../models/Product";
import { apiService } from "./auth/ApiService";

export const ProductService = {
  list: async (): Promise<ApiResponse<Product[]>> =>
    apiService.get(`${apiUrl}/products`),
  create: async (data: Product): Promise<ApiResponse<Product>> =>
    apiService.post(`${apiUrl}/products`, data),
  update: async (data: Product): Promise<ApiResponse<Product>> =>
    apiService.put(`${apiUrl}/products/${data.id}`, data),
  delete: async (data: Product): Promise<ApiResponse<Product>> =>
    apiService.delete(`${apiUrl}/products/${data.id}`, data),
};
