import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IArticleCard } from 'shared/interface/article.interface';
import AddToFavourite from 'components/atoms/AddToFavorites/AddToFavorites';
import TagList from 'components/molecules/TagList/TagList';
import { locales } from 'locales/en';

export interface ICard extends IArticleCard {
    isList?: boolean;
}

const Card: FC<ICard> = ({ id, imageUrl, title, description, tags, isList, slug, username }) => {
    return (
        <div className="rounded-3xl shadow-md bg-white grid grid-cols-12">
            <div
                className={`${
                    isList ? 'rounded-l-3xl col-span-3' : 'rounded-t-3xl col-span-12'
                } overflow-hidden relative`}
            >
                <Image
                    src={imageUrl}
                    width="100%"
                    height="50"
                    layout={isList ? 'fill' : 'responsive'}
                    objectFit="cover"
                />
            </div>

            <div
                className={`${
                    isList ? 'col-span-9' : 'col-span-12'
                } inline-flex flex-wrap justify-between flex-col`}
            >
                <div className="p-6">
                    <TagList items={tags} />
                    <h2 className="font-bold text-3xl mb-6 uppercase break-all">{title}</h2>
                    <p className="text-gray-400 text-2xl break-all">{description}</p>
                </div>
                <div className="w-full bg-gray-50 border-t border-solid border-gray-100 p-6 rounded-b-3xl flex justify-between items-center max-h-28">
                    <AddToFavourite id={id} />
                    <Link href={`/articles/${slug}?username=${username}`}>
                        {locales.label.showMore}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;
