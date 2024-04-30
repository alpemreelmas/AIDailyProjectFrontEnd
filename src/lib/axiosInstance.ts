import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.API_URL,
    timeout: 1000,
    headers: {'Content-Type': 'application/json'}
});

axiosInstance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

axiosInstance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});

export default axiosInstance;