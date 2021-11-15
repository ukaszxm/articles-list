import { combineReducers, Reducer } from 'redux';
import { State } from 'store/reducer-creator';
import { IUser } from 'shared/interface/user.interface';
import { userReducer } from 'store/reducers/auth/auth.reducer';
import { ISingleItem } from 'shared/interface/singleItem.interface';
import { tagsReducer } from 'store/reducers/tags/tags.reducer';

export interface IAppState {
    user: State<IUser>;
    tags: State<ISingleItem[]>;
}

export const rootReducer: Reducer<IAppState> = combineReducers<IAppState>({
    user: userReducer,
    tags: tagsReducer,
} as any);
