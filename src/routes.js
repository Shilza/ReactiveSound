import {Favorites} from "./features/favorites";
import {Search} from "./features/search";
import {User} from "./features/users";

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
    },
    {
        path: '/users/:id/tracks',
        exact: true,
        component: User
    }
];