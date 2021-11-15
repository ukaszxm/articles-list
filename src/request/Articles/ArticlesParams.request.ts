import { IArticleParams } from 'shared/interface/articleParams.interface';

class ArticlesParamsRequest {
    public page?: number;

    public top?: string;

    public tag?: string;

    constructor({ page, top, tag }: IArticleParams) {
        this.page = page;
        this.top = top;
        this.tag = tag;
    }
}

export default ArticlesParamsRequest;
