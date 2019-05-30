import {expectSaga} from "redux-saga-test-plan";
import * as matchers from 'redux-saga-test-plan/matchers';
import {select} from 'redux-saga/effects';
import {throwError} from 'redux-saga-test-plan/providers';
import {fetchUser, requestUser, requestUserError, requestUserSuccess,} from "../actionCreators";
import {tracksApi} from "../../common/api";
import {watchFetchUser} from "./user";
import {getCurrentUserId} from "../selectors";

describe('User saga', () => {
    it('should fetch user runs correctly', () => {
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

    it('should catch error', () => {
        const id = 5;

        return expectSaga(watchFetchUser)
            .provide([
                [select(getCurrentUserId), 0],
                [matchers.call.fn(tracksApi.getUserById), throwError(new Error())]
            ])
            .put(requestUser())
            .put(requestUserError())
            .dispatch(fetchUser(id))
            .silentRun();
    });

    it('should not fetch user', () => {
        const id = 5;

        return expectSaga(watchFetchUser)
            .provide([
                [select(getCurrentUserId), id]
            ])
            .dispatch(fetchUser(id))
            .silentRun();
    });
});