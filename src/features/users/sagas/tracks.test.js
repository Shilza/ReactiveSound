import {expectSaga} from "redux-saga-test-plan";
import * as matchers from 'redux-saga-test-plan/matchers';
import {select} from 'redux-saga/effects';
import {throwError} from 'redux-saga-test-plan/providers';
import {
    fetchUsersTracks,
    fetchUsersTracksByPage, requestUsersLikedTracksError,
    requestUsersTracks, requestUsersTracksError,
    requestUsersTracksSuccess,
    resetUsersTracks,
} from "../actionCreators";
import {getCountOfUsersTracks, getCurrentUserTracksUserId, getUsersTracksNextPage,} from "../selectors";
import {tracksApi} from "../../common/api";
import {watchFetchUsersTracks, watchFetchUsersTracksByPage} from "./tracks";

describe('Tracks sagas', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });

    describe('fetch tracks saga', () => {
        it('should runs correctly', () => {
            const id = 5;
            const data = [];

            return expectSaga(watchFetchUsersTracks)
                .provide([
                    [select(getCountOfUsersTracks), 0],
                    [select(getCurrentUserTracksUserId), 6],
                    [matchers.call.fn(tracksApi.getUsersTracksById), data]
                ])
                .put(resetUsersTracks())
                .put(requestUsersTracks())
                .put(requestUsersTracksSuccess({...data, userId: id}))
                .dispatch(fetchUsersTracks(id))
                .silentRun();
        });

        it('should catch error', () => {
            const id = 5;

            return expectSaga(watchFetchUsersTracks)
                .provide([
                    [select(getCountOfUsersTracks), 0],
                    [select(getCurrentUserTracksUserId), 6],
                    [matchers.call.fn(tracksApi.getUsersTracksById), throwError(new Error())]
                ])
                .put(resetUsersTracks())
                .put(requestUsersTracks())
                .put(requestUsersTracksError())
                .dispatch(fetchUsersTracks(id))
                .silentRun();
        });

        it('should not dispatch success', () => {
            const id = 5;

            return expectSaga(watchFetchUsersTracks)
                .provide([
                    [select(getCountOfUsersTracks), 1],
                    [select(getCurrentUserTracksUserId), id],
                ])
                .dispatch(fetchUsersTracks(id))
                .silentRun();
        })
    });

    describe('fetch tracks by page saga', () => {
        it('should runs correctly', () => {
            const data = [];
            fetch.mockResponseOnce(JSON.stringify(data));

            return expectSaga(watchFetchUsersTracksByPage)
                .provide([
                    [select(getUsersTracksNextPage), 'nextPage']
                ])
                .put(requestUsersTracksSuccess(data))
                .dispatch(fetchUsersTracksByPage())
                .silentRun();
        });

        it('should catch error', () => {
            fetch.mockResponseOnce(() => {
                throw Error();
            });

            return expectSaga(watchFetchUsersTracksByPage)
                .provide([
                    [select(getUsersTracksNextPage), 'nextPage']
                ])
                .put(requestUsersTracksError())
                .dispatch(fetchUsersTracksByPage())
                .silentRun();
        });
    });
});