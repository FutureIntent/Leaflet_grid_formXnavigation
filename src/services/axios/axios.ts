import Axios from 'axios';

let token: string | null = null;

const axios = Axios.create({
    headers: {
        'Content-Type': 'application/json-patch+json',
        'crossDomain': true,
    },
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    // baseURL: process.env.NEXT_PUBLIC_LOCAL_API_URL,
});

axios.interceptors.request.use((config) => {
    if (token && config?.headers) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export const setToken = (newToken: string | null): void => {
    token = newToken;
};

export const getToken = (): string | null => token;

export default axios;
