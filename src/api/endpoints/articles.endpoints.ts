import Axios from 'api/AxiosClient/AxiosClient';
import { AxiosResponse } from 'axios';
import { IArticleParams } from 'shared/interface/articleParams.interface';

class ArticlesEndpoints extends Axios {
    getArticles = (params: IArticleParams): Promise<AxiosResponse> => {
        return this.client.get('/articles', { params });
    };

    getArticleByPathName = (username: string, slug: string): Promise<AxiosResponse> => {
        return this.client.get(`/articles/${username}/${slug}`);
    };

    getArticleById = (id: number): Promise<AxiosResponse> => {
        return this.client.get(`/articles/${id}`);
    };

    getTags = (): Promise<AxiosResponse> => {
        return this.client.get('/tags?per_page=50');
    };
}

export default new ArticlesEndpoints();
