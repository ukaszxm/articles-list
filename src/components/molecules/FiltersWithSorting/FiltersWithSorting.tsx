import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormikProps, useFormik } from 'formik';
import Select from 'components/atoms/Select/Select';
import { getTags } from 'actions/tags/tags.actions';
import { IAppState } from 'store/reducers';
import { useRouter } from 'next/router';
import { sortingList } from 'shared/lists/sorting.list';
import FiltersWithSortingInitialValue from 'components/molecules/FiltersWithSorting/FiltersWithSorting.initialValue';
import { removeFromObject } from 'utils/removeFromObject/removeFromObject.util';
import { Routes } from 'shared/routes/routes';
import Button from 'components/atoms/Button/Button';
import { locales } from 'locales/en';

export interface IFiltersWithSorting {
    tag: string;
    top: string;
}

const FiltersWithSorting: FC = () => {
    const Router = useRouter();
    const dispatch = useDispatch();
    const initialValues = new FiltersWithSortingInitialValue(Router.query);
    const { tags } = useSelector((store: IAppState) => store);
    const { values, handleChange, handleSubmit }: FormikProps<IFiltersWithSorting> =
        useFormik<IFiltersWithSorting>({
            initialValues: initialValues.getInitialValues(),
            enableReinitialize: true,
            onSubmit: (params) => {
                initialValues.setToCookies(removeFromObject<IFiltersWithSorting>(params));
                Router.push({
                    pathname: Routes.articles,
                    query: { ...removeFromObject<IFiltersWithSorting>(params) },
                });
            },
        });

    useEffect(() => {
        if (tags.data.length === 0) {
            dispatch(getTags());
        }
    }, []);

    useEffect(() => {
        initialValues.setToCookies(removeFromObject<IFiltersWithSorting>(values));
        Router.push({
            pathname: Routes.articles,
            query: { ...removeFromObject<IFiltersWithSorting>(values) },
        });
    }, []);

    return (
        <div className="rounded-3xl bg-white w-full p-10 shadow">
            <form onSubmit={handleSubmit}>
                <h2 className="text-gray-500 font-bold mb-6">{locales.label.filters}</h2>
                <Select name="tag" onChange={handleChange} value={values.tag} items={tags.data} />
                <h2 className="text-gray-500 font-bold my-6">{locales.label.sortBy}</h2>
                <Select name="top" onChange={handleChange} value={values.top} items={sortingList} />
                <div className="w-full flex justify-end mt-6">
                    <Button type="submit" disabled={false}>
                        {locales.label.search}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default FiltersWithSorting;
