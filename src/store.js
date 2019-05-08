import {applyMiddleware, createStore} from 'redux';
import {RootReducer} from './reducers';
import createSagaMiddleware from 'redux-saga';
import {all} from 'redux-saga/effects';
import {favoritesSagas} from "./features/favorites/sagas";
import {trackInterval} from "./features/common/middlewares";
import {seek} from "./features/common/middlewares";
import {stopPlayer} from "./features/common/middlewares";
import {searchSagas} from "./features/search/sagas";
import {usersSagas} from "./features/users/sagas";
import {playerSagas} from "./features/common/sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    RootReducer,
    applyMiddleware(sagaMiddleware, trackInterval, seek, stopPlayer)
);

function* rootSaga() {
    yield all([
        ...favoritesSagas,
        ...playerSagas,
        ...searchSagas,
        ...usersSagas
    ])
}

sagaMiddleware.run(rootSaga);

export default store;