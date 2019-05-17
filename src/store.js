import {applyMiddleware, createStore} from 'redux';
import {RootReducer} from './reducers';
import createSagaMiddleware from 'redux-saga';
import {seek, stopPlayer, trackInterval} from "./features/common/middlewares";
import {rootSaga} from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    RootReducer,
    applyMiddleware(sagaMiddleware, trackInterval, seek, stopPlayer)
);

sagaMiddleware.run(rootSaga);

export default store;