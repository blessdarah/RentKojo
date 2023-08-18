import { apiUrl } from "../constants/common.constants";
import { Store } from "../models/Store";
import { apiService } from "./auth/ApiService";

export const StoreService = {
  list: async () => apiService.get(`${apiUrl}/stores`),
  create: async (data: Store) => apiService.post(`${apiUrl}/stores`, data),
  update: async (data: Store) =>
    apiService.put(`${apiUrl}/stores/${data.id}`, data),
  delete: async (data: Store) =>
    apiService.delete(`${apiUrl}/stores${data.id}`, data),
};
