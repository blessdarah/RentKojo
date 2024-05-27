import axios from "axios";

const apiHeaders = {
  headers: {
    Accept: "application/json",
    Authorization: "",
  },
};

const apiConfig = () => {
  const user = JSON.parse(localStorage.getItem("user")!);
  apiHeaders.headers["Authorization"] = `Bearer ${user ? user.token : ""}`;
  return apiHeaders;
};

export const apiService = {
  get: (url: string) =>
    axios.get(url, apiConfig()).then((response) => response.data),
  post: (url: string, body: {}) =>
    axios.post(url, body, apiConfig()).then((response) => response.data),
  put: (url: string, body: {}) =>
    axios.put(url, body, apiConfig()).then((response) => response.data),
  delete: (url: string) =>
    axios.delete(url, apiConfig()).then((response) => response.data),
};
