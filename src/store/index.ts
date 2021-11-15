import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from 'store/reducers';

let isWindow = null;

if (typeof window !== 'undefined') {
    isWindow =
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
        // eslint-disable-next-line no-underscore-dangle
        (window as any).__REDUX_DEVTOOLS_EXTENSION__();
}

export const store = createStore(rootReducer, compose(applyMiddleware(thunk), isWindow || compose));

export default store;
