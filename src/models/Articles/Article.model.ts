import ArticleCardModel from 'models/Articles/ArticleCard.model';

class ArticleModel extends ArticleCardModel {
    public content: string;

    constructor(article: any) {
        super(article);
        this.content = article.body_html.replace(/<\/?span[^>]*>/g, '');
    }
}

export default ArticleModel;
