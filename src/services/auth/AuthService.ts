import { apiService } from "./ApiService";

const authUrl = import.meta.env.VITE_AUTH_URL;
const apiUrl = import.meta.env.VITE_API_URL;

type AuthInfo = {
  phoneNumber: string | number;
  email: string;
  password: string;
};
export const AuthService = {
  login: async (authData: AuthInfo) =>
    apiService.post(`${authUrl}/login`, authData),
  register: async (authData: AuthInfo) =>
    apiService.post(`${apiUrl}/users`, authData),
};
