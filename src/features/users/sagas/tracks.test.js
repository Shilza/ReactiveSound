import {expectSaga} from "redux-saga-test-plan";
import * as matchers from 'redux-saga-test-plan/matchers';
import {select} from 'redux-saga/effects';
import {
    fetchUsersTracks,
    fetchUsersTracksByPage,
    requestUsersTracks,
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

    it('fetch tracks saga runs', () => {
        const id = 5;
        const data = [];

        return expectSaga(watchFetchUsersTracks)
            .provide([
                [select(getCountOfUsersTracks), 0],
                [select(getCurrentUserTracksUserId), 5],
                [matchers.call.fn(tracksApi.getUsersTracksById), data]
            ])
            .put(resetUsersTracks())
            .put(requestUsersTracks())
            .put(requestUsersTracksSuccess({...data, userId: id}))
            .dispatch(fetchUsersTracks(id))
            .silentRun();
    });

    it('fetch tracks by page saga runs', () => {
        const data = [];
        fetch.mockResponseOnce(JSON.stringify(data));

        return expectSaga(watchFetchUsersTracksByPage)
            .provide([
                [select(getUsersTracksNextPage), 'nextPage'],
                [matchers.call.fn(tracksApi.getTracks), data]
            ])
            .put(requestUsersTracksSuccess(data))
            .dispatch(fetchUsersTracksByPage())
            .silentRun();
    });
});