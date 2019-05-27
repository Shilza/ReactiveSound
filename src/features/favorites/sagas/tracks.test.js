import {expectSaga} from "redux-saga-test-plan";
import {select} from 'redux-saga/effects';
import {
    fetchFavoriteTracks,
    fetchFavoriteTracksByPage,
    requestFavoriteTracks,
    requestFavoriteTracksSuccess
} from "../actionCreators";
import * as matchers from 'redux-saga-test-plan/matchers';
import {watchFetchFavoriteTracks, watchFetchFavoriteTracksByPage} from "./tracks";
import {getFavoriteTracksNextPage} from "../selectos";
import {tracksApi} from "../../common/api";

describe('Test favorites sagas', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });

    it('watchFetchFavoriteTracks saga runs', () => {
        const data = {
            next_href: 'href',
            collection: []
        };

        return expectSaga(watchFetchFavoriteTracks)
            .provide([
                [matchers.call.fn(tracksApi.getFavorites), data]
            ])
            .put(requestFavoriteTracks())
            .put(requestFavoriteTracksSuccess(data))
            .dispatch(fetchFavoriteTracks())
            .silentRun();
    });

    it('watchFetchFavoriteTracksByPage saga runs', () => {
        const data = {
            next_href: 'href',
            collection: []
        };
        fetch.mockResponseOnce(JSON.stringify(data));

        return expectSaga(watchFetchFavoriteTracksByPage)
            .provide([
                [select(getFavoriteTracksNextPage), []],
                [matchers.call.fn(tracksApi.getTrackById), data]
            ])
            .put(requestFavoriteTracksSuccess(data))
            .dispatch(fetchFavoriteTracksByPage())
            .silentRun();
    });
});
