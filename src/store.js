import {applyMiddleware, createStore} from 'redux';
import {RootReducer} from './reducers';
import createSagaMiddleware from 'redux-saga';
import {seek, stopPlayer, playingControl} from "./features/common/middlewares";
import {rootSaga} from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    RootReducer,
    applyMiddleware(sagaMiddleware, playingControl, seek, stopPlayer)
);

sagaMiddleware.run(rootSaga);

export default store;