import React, { FC, useState } from 'react';
import ChangeView from 'components/atoms/ChangeView/ChangeView';
import { IArticleCard } from 'shared/interface/article.interface';
import Card from 'components/molecules/Card/Card';
import Button from 'components/atoms/Button/Button';
import Loader from 'components/atoms/Loader/Loader';
import { locales } from 'locales/en';

interface IArticlesWrapper {
    articles: IArticleCard[][] | undefined;
    hasNextPage?: boolean;
    fetchNextPage?: () => void;
    isFetching?: boolean;
}

const ArticlesWrapper: FC<IArticlesWrapper> = ({
    articles,
    hasNextPage,
    fetchNextPage,
    isFetching,
}) => {
    const [currentView, setChangeView] = useState<boolean>(false);

    return (
        <div className="w-full">
            {isFetching && <Loader />}
            <div className="w-full flex justify-end  my-10">
                <ChangeView
                    currentView={currentView}
                    handleView={() => setChangeView((prevState) => !prevState)}
                />
            </div>
            <div
                className={`grid gap-10 ${
                    currentView ? 'grid-cols-1' : 'md:grid-cols-2 lg:grid-cols-3'
                }`}
            >
                {articles?.map((page) =>
                    page.map(({ id, imageUrl, title, description, tags, slug, username }) => (
                        <Card
                            id={id}
                            key={id}
                            imageUrl={imageUrl}
                            title={title}
                            description={description}
                            tags={tags}
                            isList={currentView}
                            slug={slug}
                            username={username}
                        />
                    ))
                )}
            </div>
            {hasNextPage && (
                <div className="mt-10 flex w-full justify-center">
                    <Button type="button" disabled={false} onClick={fetchNextPage}>
                        {locales.label.loadMore}
                    </Button>
                </div>
            )}
        </div>
    );
};

export default ArticlesWrapper;
