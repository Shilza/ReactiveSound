import {expectSaga} from "redux-saga-test-plan";
import * as matchers from 'redux-saga-test-plan/matchers';
import {select} from 'redux-saga/effects';
import {fetchUser, requestUser, requestUserSuccess,} from "../actionCreators";
import {tracksApi} from "../../common/api";
import {watchFetchUser} from "./user";
import {getCurrentUserId} from "../selectors";

describe('User saga', () => {
    it('fetch user', () => {
        const id = 5;
        const data = {};

        return expectSaga(watchFetchUser)
            .provide([
                [select(getCurrentUserId), 0],
                [matchers.call.fn(tracksApi.getUserById), data]
            ])
            .put(requestUser())
            .put(requestUserSuccess(data))
            .dispatch(fetchUser(id))
            .silentRun();
    });

    it('do not fetch user', () => {
        const id = 5;

        return expectSaga(watchFetchUser)
            .provide([
                [select(getCurrentUserId), id]
            ])
            .dispatch(fetchUser(id))
            .silentRun();
    });
});