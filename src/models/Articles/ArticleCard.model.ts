import { ISingleItem } from 'shared/interface/singleItem.interface';
import TagModel from 'models/Tags/Tag.model';

class ArticleCardModel {
    public id: number;

    public slug: string;

    public username: string;

    public imageUrl: string;

    public title: string;

    public description: string;

    public tags: ISingleItem[];

    constructor(article: any) {
        this.id = article.id;
        this.slug = article.slug;
        this.username =
            'organization' in article ? article.organization.username : article.user.username;
        this.imageUrl = article.cover_image || '/img/default-image.png';
        this.title = article.title;
        this.description = article.description;
        this.tags =
            typeof article.tag_list === 'string'
                ? article.tags.map((tag: string) => new TagModel(tag))
                : article.tag_list.map((tag: string) => new TagModel(tag));
    }
}

export default ArticleCardModel;
