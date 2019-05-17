import {favoritesSagas} from "./features/favorites/sagas";
import {usersSagas} from "./features/users/sagas";
import {searchSagas} from "./features/search/sagas";
import {playerSagas} from "./features/common/sagas";
import {all} from 'redux-saga/effects';

export function* rootSaga() {
    yield all([
        ...favoritesSagas,
        ...playerSagas,
        ...searchSagas,
        ...usersSagas
    ])
}