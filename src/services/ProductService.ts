import { apiUrl } from "../constants/common.constants";
import { Product } from "../models/Product";
import { apiService } from "./auth/ApiService";

export const ProductService = {
  list: async (): Promise<Product[]> => apiService.get(`${apiUrl}/products`),
  create: async (data: Product): Promise<Product> =>
    apiService.post(`${apiUrl}/products`, data),
  update: async (data: Product): Promise<Product> =>
    apiService.put(`${apiUrl}/products/${data.id}`, data),
  delete: async (data: Product): Promise<Product> =>
    apiService.delete(`${apiUrl}/products${data.id}`, data),
};
