import {applyMiddleware, createStore} from 'redux';
import { RootReducer } from './reducers';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { favoritesSaga } from "./features/favorites/sagas";
import {trackInterval} from "./features/favorites/middlewares/trackInterval";
import {seek} from "./features/favorites/middlewares/seek";
import {stopPlayer} from "./features/favorites/middlewares/stopPlayer";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    RootReducer,
    applyMiddleware(sagaMiddleware, trackInterval, seek, stopPlayer)
);

function* rootSaga() {
    yield all([
        favoritesSaga()
    ])
}

sagaMiddleware.run(rootSaga);

export default store;