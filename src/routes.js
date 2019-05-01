import {Favorites} from "./features/favorites";
import {Search} from "./features/search";

export const routes = [
    {
        path: '/',
        exact: true,
        component: Favorites
    },
    {
        path: '/search/:query',
        exact: true,
        component: Search
    }
];