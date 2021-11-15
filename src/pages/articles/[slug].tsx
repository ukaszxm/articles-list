import React from 'react';
import type { NextPage } from 'next';
import ArticlesRepository from 'repositories/Articles/Articles.repository';
import { ICard } from 'components/molecules/Card/Card';
import ReactHtmlParser from 'react-html-parser';
import { FormatedContent } from 'components/atoms/FormatedContent/FormatedContent.styled';
import Image from 'next/image';
import { protectedRoute } from 'utils/routes/routes.util';
import { useQuery, UseQueryResult } from 'react-query';
import { useRouter } from 'next/router';
import Loader from 'components/atoms/Loader/Loader';
import TagList from 'components/molecules/TagList/TagList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import AddToFavorites from 'components/atoms/AddToFavorites/AddToFavorites';

interface ICardExt extends ICard {
    content: string;
}

interface IArticle {
    article: ICardExt;
}

const SingleArticle: NextPage<IArticle> = ({ article }) => {
    const { query, back } = useRouter();
    const { data, isFetching }: UseQueryResult<ICardExt, Error> = useQuery(
        'article',
        () => ArticlesRepository.getArticleByPathName(String(query.username), String(query.slug)),
        {
            initialData: article,
        }
    );

    return (
        <>
            {isFetching && <Loader />}
            <div className="py-6">
                <FontAwesomeIcon
                    className="cursor-pointer hover:text-yellow-500 transition-colors duration-300 mr-6"
                    icon={faArrowLeft}
                    onClick={back}
                />
                {data?.id && <AddToFavorites id={data?.id} />}
            </div>
            {data?.imageUrl && (
                <Image
                    className="rounded-3xl"
                    src={data?.imageUrl}
                    width="100%"
                    height="30"
                    objectFit="cover"
                    layout="responsive"
                />
            )}
            <h1 className="text-6xl font-bold my-6">{data?.title}</h1>
            {data?.tags && <TagList items={data?.tags} />}
            {data?.content && <FormatedContent>{ReactHtmlParser(data?.content)}</FormatedContent>}
        </>
    );
};

export const getServerSideProps = protectedRoute(async (ctx) => {
    try {
        const { username, slug } = ctx.query;
        const article = await ArticlesRepository.getArticleByPathName(
            username.toString(),
            slug.toString()
        );

        return {
            props: {
                article: JSON.parse(JSON.stringify(article)),
            },
        };
    } catch (error) {
        return {
            props: {
                article: {},
            },
        };
    }
});

export default SingleArticle;
