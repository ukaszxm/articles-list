import { IFiltersWithSorting } from 'components/molecules/FiltersWithSorting/FiltersWithSorting';
import Cookies from 'universal-cookie';

interface IQuery {
    tag?: string;
    top?: string;
}

class FiltersWithSortingInitialValue {
    public tag: string;

    public top: string;

    public query: IQuery;

    public cookies: Cookies;

    constructor(query: IQuery) {
        this.cookies = new Cookies();
        this.query = query;
        this.tag = '';
        this.top = '';
    }

    getInitialValues = (): IFiltersWithSorting => {
        if (Object.values(this.query).length) {
            return {
                tag: this.query.tag !== undefined ? this.query.tag : this.tag,
                top: this.query.top !== undefined ? this.query.top : this.top,
            };
        }

        if (this.cookies.get('filtersWithSorting')) {
            return {
                tag:
                    'tag' in this.cookies.get('filtersWithSorting')
                        ? this.cookies.get('filtersWithSorting').tag
                        : this.tag,
                top:
                    'top' in this.cookies.get('filtersWithSorting')
                        ? this.cookies.get('filtersWithSorting').top
                        : this.top,
            };
        }

        return {
            tag: this.tag,
            top: this.top,
        };
    };

    setToCookies = (values: IFiltersWithSorting): void => {
        this.cookies.set('filtersWithSorting', values);
    };
}

export default FiltersWithSortingInitialValue;
