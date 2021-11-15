import { createReducer } from 'store/reducer-creator';
import { ActionTypes } from 'store/action-types';
import { IUser } from 'shared/interface/user.interface';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const userReducer = createReducer<IUser>(
    ActionTypes.LOGIN,
    cookies.get('user') || { email: null }
);
