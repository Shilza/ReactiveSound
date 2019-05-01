import {combineReducers} from 'redux';
import { favoriteReducer as favorite } from './features/favorites/reducers';
import { searchReducer as search } from './features/search/reducers';

export const RootReducer = combineReducers({
    favorite, search
});

