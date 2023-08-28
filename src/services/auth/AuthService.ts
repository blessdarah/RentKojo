import axios from "axios";
import { apiUrl, authUrl } from "../../constants/common.constants";
import { AuthInfo } from "../../models/AuthInfo";

const apiService = {
  get: (url: string) =>
    axios.get(url).then((response) => response.data),
  post: (url: string, body: {}) =>
    axios.post(url, body).then((response) => response.data),
  put: (url: string, body: {}) =>
    axios.put(url, body).then((response) => response.data),
  delete: (url: string, body: {}) =>
    axios
      .delete(url, body)
      .then((response) => response.data),
};


export const AuthService = {
  users: async () => apiService.get(`${apiUrl}/users`),
  login: async (authData: AuthInfo) =>
    apiService.post(`${authUrl}/login`, authData),
  signup: async (authData: AuthInfo) =>
    apiService.post(`${apiUrl}/users`, authData),
};
