import {expectSaga} from "redux-saga-test-plan";
import {select} from 'redux-saga/effects';
import { throwError } from 'redux-saga-test-plan/providers';
import {
fetchFavoriteTracks,
fetchFavoriteTracksByPage,
requestFavoriteTracks, requestFavoriteTracksError,
requestFavoriteTracksSuccess
} from "../actionCreators";
import * as matchers from 'redux-saga-test-plan/matchers';
import {watchFetchFavoriteTracks, watchFetchFavoriteTracksByPage} from "./tracks";
import {getFavoriteTracksNextPage} from "../selectos";
import {tracksApi} from "../../common/api";

describe('Favorites feature sagas', () => {
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

    it('watchFetchFavoriteTracks saga should catch error', () => {
        return expectSaga(watchFetchFavoriteTracks)
            .provide([
                [matchers.call.fn(tracksApi.getFavorites), throwError(new Error())]
            ])
            .put(requestFavoriteTracks())
            .put(requestFavoriteTracksError())
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
                [select(getFavoriteTracksNextPage), []]
            ])
            .put(requestFavoriteTracksSuccess(data))
            .dispatch(fetchFavoriteTracksByPage())
            .silentRun();
    });

    it('watchFetchFavoriteTracksByPage saga should catch error', () => {
        fetch.mockResponseOnce(() => {
            throw Error();
        });

        return expectSaga(watchFetchFavoriteTracksByPage)
            .provide([
                [select(getFavoriteTracksNextPage), []]
            ])
            .put(requestFavoriteTracksError())
            .dispatch(fetchFavoriteTracksByPage())
            .silentRun();
    });
});
