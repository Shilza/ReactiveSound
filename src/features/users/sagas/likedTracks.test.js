import {expectSaga} from "redux-saga-test-plan";
import * as matchers from 'redux-saga-test-plan/matchers';
import {select} from 'redux-saga/effects';
import {throwError} from 'redux-saga-test-plan/providers';
import {
    fetchLikedTracksByPage,
    fetchUsersLikedTracks,
    requestUsersLikedTracks, requestUsersLikedTracksError,
    requestUsersLikedTracksSuccess,
    resetLikedTracks,
} from "../actionCreators";
import {getCountOfLikedTracks, getCurrentLikedTracksUserId, getLikedTracksNextPage,} from "../selectors";
import {tracksApi} from "../../common/api";
import {watchFetchLikedTracksByPage, watchFetchUsersLikedTracks} from "./likedTracks";

describe('Users liked tracks sagas', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });

    describe('fetch tracks saga', () => {
        it('should runs correctly', () => {
            const id = 5;
            const data = [];

            return expectSaga(watchFetchUsersLikedTracks)
                .provide([
                    [select(getCountOfLikedTracks), 0],
                    [select(getCurrentLikedTracksUserId), 6],
                    [matchers.call.fn(tracksApi.getFavorites), data]
                ])
                .put(resetLikedTracks())
                .put(requestUsersLikedTracks())
                .put(requestUsersLikedTracksSuccess({...data, userId: id}))
                .dispatch(fetchUsersLikedTracks(id))
                .silentRun();
        });

        it('should catch error', () => {
            const id = 5;

            return expectSaga(watchFetchUsersLikedTracks)
                .provide([
                    [select(getCountOfLikedTracks), 0],
                    [select(getCurrentLikedTracksUserId), 6],
                    [matchers.call.fn(tracksApi.getFavorites), throwError(new Error())]
                ])
                .put(resetLikedTracks())
                .put(requestUsersLikedTracks())
                .put(requestUsersLikedTracksError())
                .dispatch(fetchUsersLikedTracks(id))
                .silentRun();
        });

        it('should not dispatch success', () => {
            const id = 5;

            return expectSaga(watchFetchUsersLikedTracks)
                .provide([
                    [select(getCountOfLikedTracks), 1],
                    [select(getCurrentLikedTracksUserId), id]
                ])
                .dispatch(fetchUsersLikedTracks(id))
                .silentRun();
        });
    });

    describe('fetch tracks by page saga', () => {
        it('should runs correctly', () => {
            const data = [];
            fetch.mockResponseOnce(JSON.stringify(data));

            return expectSaga(watchFetchLikedTracksByPage)
                .provide([
                    [select(getLikedTracksNextPage), 'nextPage']
                ])
                .put(requestUsersLikedTracksSuccess(data))
                .dispatch(fetchLikedTracksByPage())
                .silentRun();
        });

        it('should catch error', () => {
            fetch.mockResponseOnce(() => {
                throw Error()
            });

            return expectSaga(watchFetchLikedTracksByPage)
                .provide([
                    [select(getLikedTracksNextPage), 'nextPage']
                ])
                .put(requestUsersLikedTracksError())
                .dispatch(fetchLikedTracksByPage())
                .silentRun();
        });
    });
});