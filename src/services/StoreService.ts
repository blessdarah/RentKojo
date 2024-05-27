import { apiUrl } from "../constants/common.constants";
import { ApiResponse } from "../models/ApiResponse";
import { Store } from "../models/Store";
import { apiService } from "./auth/ApiService";

export const StoreService = {
  list: async (): Promise<ApiResponse<Store[]>> =>
    apiService.get(`${apiUrl}/stores`),
  create: async (data: Store): Promise<ApiResponse<Store>> =>
    apiService.post(`${apiUrl}/stores`, data),
  update: async (data: Store): Promise<ApiResponse<Store>> =>
    apiService.put(`${apiUrl}/stores/${data.id}`, data),
  delete: async (data: Store): Promise<ApiResponse<Store>> =>
    apiService.delete(`${apiUrl}/stores/${data.id}`),
};
