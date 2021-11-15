import ArticlesEndpoints from 'api/endpoints/articles.endpoints';
import ArticleCardModel from 'models/Articles/ArticleCard.model';
import ArticleModel from 'models/Articles/Article.model';
import { IArticleCard, ISingleArticle } from 'shared/interface/article.interface';
import TagModel from 'models/Tags/Tag.model';
import { IArticleParams } from 'shared/interface/articleParams.interface';
import ArticlesParamsRequest from 'request/Articles/ArticlesParams.request';
import InternalEndpoints from 'api/endpoints/internal.endpoints';
import { locales } from 'locales/en';
import { ISingleItem } from 'shared/interface/singleItem.interface';

class ArticlesRepository {
    getArticles = (params: IArticleParams): Promise<IArticleCard[]> => {
        return new Promise((resolve, reject) => {
            ArticlesEndpoints.getArticles(new ArticlesParamsRequest(params))
                .then(({ data }) => {
                    const model = data.map((item: any) => new ArticleCardModel(item));

                    resolve(model);
                })
                .catch(() => {
                    reject(locales.notifications.error);
                });
        });
    };

    getArticleByPathName = (username: string, slug: string): Promise<ISingleArticle> => {
        return new Promise((resolve, reject) => {
            ArticlesEndpoints.getArticleByPathName(username, slug)
                .then(({ data }) => {
                    resolve(new ArticleModel(data));
                })
                .catch(() => {
                    reject(locales.notifications.error);
                });
        });
    };

    getArticleById = (id: number): Promise<IArticleCard> => {
        return new Promise((resolve, reject) => {
            ArticlesEndpoints.getArticleById(id)
                .then(({ data }) => {
                    resolve(new ArticleCardModel(data));
                })
                .catch(() => {
                    reject(locales.notifications.error);
                });
        });
    };

    getArticlesByIds = (ids: number[]): Promise<IArticleCard[]> => {
        return new Promise((resolve, reject) => {
            const favorites = ids.map((id) => this.getArticleById(id));

            Promise.all(favorites)
                .then((res) => {
                    resolve(res);
                })
                .catch(() => {
                    reject(locales.notifications.error);
                });
        });
    };

    getFavoriteArticles = (page: number, ids?: number[]): Promise<IArticleCard[]> => {
        return new Promise((resolve, reject) => {
            InternalEndpoints.getFavorites(page, ids)
                .then(({ data }) => {
                    resolve(data.articles);
                })
                .catch(() => {
                    reject(locales.notifications.error);
                });
        });
    };

    getTags = (): Promise<ISingleItem[]> => {
        return new Promise((resolve, reject) => {
            ArticlesEndpoints.getTags()
                .then(({ data }) => {
                    resolve(data.map(({ name }: any) => new TagModel(name)));
                })
                .catch(() => {
                    reject(locales.notifications.error);
                });
        });
    };
}

export default new ArticlesRepository();
