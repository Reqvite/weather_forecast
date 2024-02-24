import axios from 'axios';


export const $api = axios.create({
    baseURL: import.meta.env.VITE_WEATHER_API_URL,
});

$api.interceptors.request.use(config => {
    config.params = {
        ...config.params,
        key: import.meta.env.VITE_WEATHER_API_KEY
    };
    return config;
}, error => {
    return Promise.reject(error);
});




