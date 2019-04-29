import {combineReducers} from 'redux';
import { favoriteReducer as favorite } from './features/favorites/reducers';

export const RootReducer = combineReducers({
    favorite
});

