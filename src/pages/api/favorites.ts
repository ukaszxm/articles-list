import type { NextApiRequest, NextApiResponse } from 'next';
import ArticlesRepository from 'repositories/Articles/Articles.repository';
import { IArticleCard } from 'shared/interface/article.interface';

export interface IFavorites {
    messages?: string[];
    articles?: IArticleCard[];
}

export default async (req: NextApiRequest, res: NextApiResponse<IFavorites>): Promise<void> => {
    if (req.method === 'POST') {
        const { page, ids } = req.body;
        const { favorites } = req.cookies;
        const favoritesIds = favorites !== undefined ? JSON.parse(favorites) : [];

        const favoritesArray = ids && ids.length ? ids : favoritesIds;

        if (favoritesArray.length) {
            const perPage = 30;

            const filteredIds = favoritesArray.slice(
                (Number(page) - 1) * perPage,
                Number(page) * perPage
            );

            const articles = await ArticlesRepository.getArticlesByIds(filteredIds);

            res.status(200).json({
                articles,
            });
        } else {
            res.status(200).json({
                articles: [],
            });
        }
    } else {
        res.status(405).json({ messages: ['Method not allowed'] });
    }
};
