import { createReducer } from 'store/reducer-creator';
import { ActionTypes } from 'store/action-types';
import { ISingleItem } from 'shared/interface/singleItem.interface';

export const tagsReducer = createReducer<ISingleItem[]>(ActionTypes.TAGS, []);
