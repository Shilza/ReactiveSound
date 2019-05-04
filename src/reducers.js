import {combineReducers} from 'redux';
import { favoriteReducer as favorite } from './features/favorites/reducers';
import { searchReducer as search } from './features/search/reducers';
import { userReducer as user } from './features/users/reducers';
import { playerReducer as player } from './features/common/reducers';

export const RootReducer = combineReducers({
    favorite, player, search, user
});

