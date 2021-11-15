import { ISingleItem } from 'shared/interface/singleItem.interface';

export interface IArticleCard {
    id: number;
    slug: string;
    username: string;
    imageUrl: string;
    title: string;
    description: string;
    tags: ISingleItem[];
}

export interface ISingleArticle extends IArticleCard {
    content: string;
}
