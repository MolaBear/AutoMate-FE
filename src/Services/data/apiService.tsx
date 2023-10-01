import axios from "axios";

const apiInstance = axios.create({
    baseURL: 'https://randomuser.me/api/',
  });
  
  export const get = (url, params) => apiInstance.get(url, {params});
  export const post = (url, data) => apiInstance.post(url, data);
  export const put = (url, data) => apiInstance.put(url, data);
  export const del = (url) => apiInstance.delete(url);

