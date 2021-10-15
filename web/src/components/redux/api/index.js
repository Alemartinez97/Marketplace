import axios from "axios";
const baseURL = "http://localhost:4000/api";

export const apiCall = (url, data, headers, method) =>
  axios({
    method,
    url: baseURL + url,
    data,
    headers,
  });
