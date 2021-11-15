import React from 'react';
import type { NextPage } from 'next';
import { protectedRoute } from 'utils/routes/routes.util';
import { IArticlesPage } from 'pages/articles';
import ArticlesWrapper from 'components/molecules/ArticlesWrapper/ArticlesWrapper';
import { useInfiniteQuery, UseInfiniteQueryResult } from 'react-query';
import { IArticleCard } from 'shared/interface/article.interface';
import ArticlesRepository from 'repositories/Articles/Articles.repository';

interface IFavoritesPage extends IArticlesPage {
    total: number;
}

const Favorites: NextPage<IFavoritesPage> = ({ articles, total }) => {
    const {
        data,
        hasNextPage,
        fetchNextPage,
        isFetching,
    }: UseInfiniteQueryResult<IArticleCard[], Error> = useInfiniteQuery(
        'favorites',
        ({ pageParam = 1 }) => ArticlesRepository.getFavoriteArticles(pageParam),
        {
            initialData: { pages: [articles], pageParams: [] },
            getNextPageParam: (lastPage, allPages) => {
                const maxPages = Math.round(total / 30);
                const nextPage = allPages.length + 1;
                return nextPage <= maxPages ? nextPage : undefined;
            },
        }
    );

    return (
        <>
            <ArticlesWrapper
                articles={data?.pages}
                hasNextPage={hasNextPage}
                fetchNextPage={fetchNextPage}
                isFetching={isFetching}
            />
        </>
    );
};

export const getServerSideProps = protectedRoute(async (ctx) => {
    try {
        const { favorites } = ctx.req.cookies;
        const ids = favorites !== undefined ? JSON.parse(favorites) : [];

        const articles = await ArticlesRepository.getFavoriteArticles(1, ids);

        return {
            props: {
                articles,
                total: ids.length,
            },
        };
    } catch (error) {
        return {
            props: {
                articles: [],
                total: 0,
            },
        };
    }
});

export default Favorites;
