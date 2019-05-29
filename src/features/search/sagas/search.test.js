import {expectSaga} from "redux-saga-test-plan";
import * as matchers from 'redux-saga-test-plan/matchers';
import {select} from 'redux-saga/effects';
import {
    fetchSearchTracks,
    fetchSearchTracksByPage,
    requestSearchTracks,
    requestSearchTracksSuccess,
    resetSearchTracks
} from "../actionCreators";
import {watchFetchSearchTracks, watchFetchSearchTracksByPage} from "./search";
import {getLastQuery, getSearchTrackNextPage} from "../selectors";
import {tracksApi} from "../../common/api";

describe('Search feature sagas', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });

    it('fetch tracks saga runs', () => {
        const data = [];
        const query = 'query';

        return expectSaga(watchFetchSearchTracks)
            .provide([
                [select(getLastQuery), 'anotherQuery'],
                [matchers.call.fn(tracksApi.getTracks), data]
            ])
            .put(resetSearchTracks())
            .put(requestSearchTracks())
            .put(requestSearchTracksSuccess({...data, query}))
            .dispatch(fetchSearchTracks(query))
            .silentRun();
    });

    it('fetch tracks by page saga runs', () => {
        const data = [];
        const query = 'query';
        fetch.mockResponseOnce(JSON.stringify(data));

        return expectSaga(watchFetchSearchTracksByPage)
            .provide([
                [select(getLastQuery), query],
                [select(getSearchTrackNextPage), {}],
            ])
            .put(requestSearchTracksSuccess({...data, query}))
            .dispatch(fetchSearchTracksByPage(query))
            .silentRun();
    });
});