import {expectSaga} from "redux-saga-test-plan";
import * as matchers from 'redux-saga-test-plan/matchers';
import {select} from 'redux-saga/effects';
import {
    fetchLikedTracksByPage,
    fetchUsersLikedTracks,
    requestUsersLikedTracks,
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

    it('fetch tracks saga runs', () => {
        const id = 5;
        const data = [];

        return expectSaga(watchFetchUsersLikedTracks)
            .provide([
                [select(getCountOfLikedTracks), 0],
                [select(getCurrentLikedTracksUserId), 5],
                [matchers.call.fn(tracksApi.getFavorites), data]
            ])
            .put(resetLikedTracks())
            .put(requestUsersLikedTracks())
            .put(requestUsersLikedTracksSuccess({...data, userId: id}))
            .dispatch(fetchUsersLikedTracks(id))
            .silentRun();
    });

    it('fetch tracks by page saga runs', () => {
        const data = [];
        fetch.mockResponseOnce(JSON.stringify(data));

        return expectSaga(watchFetchLikedTracksByPage)
            .provide([
                [select(getLikedTracksNextPage), 'nextPage'],
                [matchers.call.fn(tracksApi.getTracks), data]
            ])
            .put(requestUsersLikedTracksSuccess(data))
            .dispatch(fetchLikedTracksByPage())
            .silentRun();
    });
});