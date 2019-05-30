import {expectSaga} from "redux-saga-test-plan";
import * as matchers from 'redux-saga-test-plan/matchers';
import {select} from 'redux-saga/effects';
import { throwError } from 'redux-saga-test-plan/providers';
import {
    fetchSearchTracks,
    fetchSearchTracksByPage,
    requestSearchTracks, requestSearchTracksError,
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

    describe('fetch tracks saga', () => {
        it('should runs correctly', () => {
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

        it('should catch error', () => {
            const query = 'query';

            return expectSaga(watchFetchSearchTracks)
                .provide([
                    [select(getLastQuery), 'anotherQuery'],
                    [matchers.call.fn(tracksApi.getTracks), throwError(new Error())]
                ])
                .put(resetSearchTracks())
                .put(requestSearchTracks())
                .put(requestSearchTracksError())
                .dispatch(fetchSearchTracks(query))
                .silentRun();
        });

        it('should not dispatch success', () => {
            const query = 'query';

            return expectSaga(watchFetchSearchTracks)
                .provide([
                    [select(getLastQuery), query]
                ])
                .dispatch(fetchSearchTracks(query))
                .silentRun();
        });
    });

    describe('fetch tracks by page saga', () => {
        it('should runs', () => {
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

        it('should catch error', () => {
            const query = 'query';
            fetch.mockResponseOnce(() => {
                new Error();
            });

            return expectSaga(watchFetchSearchTracksByPage)
                .provide([
                    [select(getLastQuery), query],
                    [select(getSearchTrackNextPage), {}],
                ])
                .put(requestSearchTracksError())
                .dispatch(fetchSearchTracksByPage(query))
                .silentRun();
        });
    });
});