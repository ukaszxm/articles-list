import axios, { AxiosInstance } from 'axios';
import { locales } from 'locales/en';
import { showNotification } from 'utils/showNotification/showNotification';

const AxiosClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_APP_BACKEND_URL_API,
});

AxiosClient.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

AxiosClient.interceptors.response.use(
    async (response) => {
        return Promise.resolve(response);
    },
    async ({ response }) => {
        if (response.status) {
            if (response.status === 500) {
                showNotification([locales.notifications['500']], 'error');
                return Promise.reject(locales.notifications['500']);
            }
        }

        return Promise.reject(response);
    }
);

class Axios {
    client: AxiosInstance;

    constructor() {
        this.client = AxiosClient;
    }
}

export default Axios;
