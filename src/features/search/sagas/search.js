import {FETCHED_SEARCH_TRACKS, FETCHED_SEARCH_TRACKS_BY_PAGE} from "../actionTypes";
import {call, put, select, takeLatest} from "redux-saga/effects";
import SC from "soundcloud";
import {
    requestSearchTracks,
    requestSearchTracksError,
    requestSearchTracksSuccess,
    resetSearchTracks
} from "../actionCreators";
import {getLastQuery, getSearchTrackNextPage} from "../selectors";

export function* watchFetchSearchTracks() {
    yield takeLatest(FETCHED_SEARCH_TRACKS, fetchSearchTracksAsync);
}

export function* watchFetchSearchTracksByPage() {
    yield takeLatest(FETCHED_SEARCH_TRACKS_BY_PAGE, fetchSearchTracksByPageAsync);
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