import React from 'react';
import type { NextPage } from 'next';
import ArticlesRepository from 'repositories/Articles/Articles.repository';
import { useInfiniteQuery, UseInfiniteQueryResult } from 'react-query';
import { IArticleCard } from 'shared/interface/article.interface';
import { protectedRoute } from 'utils/routes/routes.util';
import ArticlesWrapper from 'components/molecules/ArticlesWrapper/ArticlesWrapper';
import FiltersWithSorting from 'components/molecules/FiltersWithSorting/FiltersWithSorting';
import { useRouter } from 'next/router';

export interface IArticlesPage {
    articles: IArticleCard[];
}

const Articles: NextPage<IArticlesPage> = ({ articles }) => {
    const { query } = useRouter();
    const {
        data,
        hasNextPage,
        fetchNextPage,
        isFetching,
    }: UseInfiniteQueryResult<IArticleCard[], Error> = useInfiniteQuery(
        ['articles', query],
        ({ pageParam = 1 }) => ArticlesRepository.getArticles({ page: pageParam, ...query }),
        {
            initialData: { pages: [articles], pageParams: [] },
            getNextPageParam: (lastPage, allPages) => {
                const nextPage = allPages.length + 1;
                return lastPage.length < 30 ? undefined : nextPage;
            },
        }
    );

    return (
        <>
            <FiltersWithSorting />
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
        const filters =
            ctx.req.cookies.filtersWithSorting !== undefined
                ? JSON.parse(ctx.req.cookies.filtersWithSorting)
                : {};
        const articles = await ArticlesRepository.getArticles({ ...filters });

        return {
            props: {
                articles: JSON.parse(JSON.stringify(articles)),
            },
        };
    } catch (error) {
        return {
            props: {
                articles: [],
            },
        };
    }
});

export default Articles;
