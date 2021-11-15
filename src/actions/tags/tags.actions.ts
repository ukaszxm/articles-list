import { Dispatch } from 'redux';
import ArticlesRepository from 'repositories/Articles/Articles.repository';
import { ActionTypes } from 'store/action-types';

export const getTags =
    () =>
    async (dispatch: Dispatch): Promise<void> => {
        dispatch({ type: `FETCH_${ActionTypes.TAGS}_REQUEST` });
        await ArticlesRepository.getTags()
            .then((res) => {
                dispatch({ type: `FETCH_${ActionTypes.TAGS}_SUCCESS`, payload: res });
            })
            .catch(() => {
                dispatch({ type: `FETCH_${ActionTypes.TAGS}_FAILURE` });
            });
    };
