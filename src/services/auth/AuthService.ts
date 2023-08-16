import { apiUrl, authUrl } from "../../constants/common.constants";
import { AuthInfo } from "../../models/AuthInfo";
import { apiService } from "./ApiService";

export const AuthService = {
  users: async () => apiService.get(`${apiUrl}/users`),
  login: async (authData: AuthInfo) =>
    apiService.post(`${authUrl}/login`, authData),
  register: async (authData: AuthInfo) =>
    apiService.post(`${apiUrl}/users`, authData),
};
