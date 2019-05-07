import {FETCHED_SEARCH_TRACKS, FETCHED_SEARCH_TRACKS_BY_PAGE} from "../actionTypes";
import {call, put, select, fork, take} from "redux-saga/effects";
import SC from "soundcloud";
import {
    requestSearchTracks,
    requestSearchTracksError,
    requestSearchTracksSuccess,
    resetSearchTracks
} from "../actionCreators";
import {getLastQuery, getSearchTrackNextPage} from "../selectors";

export function* watchFetchSearchTracks() {
    while (true) {
        const action = yield take(FETCHED_SEARCH_TRACKS);
        yield fork(fetchSearchTracksAsync, action);
    }
}

export function* watchFetchSearchTracksByPage() {
    while (true) {
        const action = yield take(FETCHED_SEARCH_TRACKS_BY_PAGE);
        yield fork(fetchSearchTracksByPageAsync, action);
    }
}

function* fetchSearchTracksByPageAsync() {
    try {
        const query = yield select(getLastQuery);
        const nextPage = yield select(getSearchTrackNextPage);
        const response = yield call(fetch, nextPage);
        const data = yield call([response, response.json]);
        yield put(requestSearchTracksSuccess({...data, query}));
    } catch (error) {
        yield put(requestSearchTracksError());
    }
}

function* fetchSearchTracksAsync({payload: query}) {
    try {
        const lastQuery = yield select(getLastQuery);
        if (lastQuery !== query) {
            yield put(resetSearchTracks());
            yield put(requestSearchTracks());
            const data = yield call(() => {
                    return SC.get('/tracks', {
                        q: query,
                        limit: 20,
                        linked_partitioning: 1
                    }).then(tracks => tracks);
                }
            );
            yield put(requestSearchTracksSuccess({...data, query}));
        }
    } catch (error) {
        yield put(requestSearchTracksError());
    }
}