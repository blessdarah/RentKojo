import axios from "axios";

export const apiService = {
  get: (url: string) => axios.get(url).then((response) => response.data),
  post: (url: string, body: {}) =>
    axios.post(url, body).then((response) => response.data),
  put: (url: string, body: {}) =>
    axios.put(url, body).then((response) => response.data),
  delete: (url: string, body: {}) =>
    axios.delete(url, body).then((response) => response.data),
};
