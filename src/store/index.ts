import {combineReducers, createStore} from 'redux';
import {itemReducer} from './items/reducers';

const rootReducer = combineReducers({
    items: itemReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    const store = createStore(rootReducer);
    return store;
}