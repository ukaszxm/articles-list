import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { ILogin } from 'shared/interface/login.interface';

class InternalEndpoints {
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: process.env.NEXT_PUBLIC_APP_BACKEND_INTERNAL_URL_API,
        });
    }

    login = (params: ILogin): Promise<AxiosResponse> => {
        return this.client.post('/api/login', params);
    };

    logout = (): Promise<AxiosResponse> => {
        return this.client.post('/api/logout');
    };

    getFavorites = (page: number, ids?: number[]): Promise<AxiosResponse> => {
        return this.client.post('/api/favorites', { page, ids });
    };
}

export default new InternalEndpoints();
