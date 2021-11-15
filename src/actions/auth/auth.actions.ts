import { Dispatch } from 'redux';
import AuthRepository from 'repositories/Auth/Auth.repository';
import { ILogin } from 'shared/interface/login.interface';
import { ActionTypes } from 'store/action-types';

export const login =
    (params: ILogin) =>
    async (dispatch: Dispatch): Promise<void> => {
        dispatch({ type: `FETCH_${ActionTypes.LOGIN}_REQUEST` });
        await AuthRepository.login(params)
            .then((res) => {
                dispatch({ type: `FETCH_${ActionTypes.LOGIN}_SUCCESS`, payload: res });
            })
            .catch(() => {
                dispatch({ type: `FETCH_${ActionTypes.LOGIN}_FAILURE` });
            });
    };

export const logout =
    () =>
    async (dispatch: Dispatch): Promise<void> => {
        dispatch({ type: `FETCH_${ActionTypes.LOGIN}_REQUEST` });
        await AuthRepository.logout()
            .then((res) => {
                dispatch({ type: `FETCH_${ActionTypes.LOGIN}_SUCCESS`, payload: { email: null } });
            })
            .catch(() => {
                dispatch({ type: `FETCH_${ActionTypes.LOGIN}_FAILURE` });
            });
    };
