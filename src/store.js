import {applyMiddleware, createStore} from 'redux';
import { RootReducer } from './reducers';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { favoritesSaga } from "./features/favorites/sagas";
import {trackInterval} from "./features/common/middlewares/trackInterval";
import {seek} from "./features/common/middlewares/seek";
import {stopPlayer} from "./features/common/middlewares/stopPlayer";
import {searchSaga} from "./features/search/sagas";
import {usersSaga} from "./features/users/sagas";
import {playerSaga} from "./features/common/sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    RootReducer,
    applyMiddleware(sagaMiddleware, trackInterval, seek, stopPlayer)
);

function* rootSaga() {
    yield all([
        favoritesSaga(),
        playerSaga(),
        searchSaga(),
        usersSaga()
    ])
}

sagaMiddleware.run(rootSaga);

export default store;