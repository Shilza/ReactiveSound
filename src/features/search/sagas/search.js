import {FETCHED_SEARCH_TRACKS, FETCHED_SEARCH_TRACKS_BY_PAGE} from "../actionTypes";
import {call, put, select, takeEvery} from "redux-saga/effects";
import {
    requestSearchTracks,
    requestSearchTracksError,
    requestSearchTracksSuccess,
    resetSearchTracks
} from "../actionCreators";
import {getLastQuery, getSearchTrackNextPage} from "../selectors";
import {tracksApi} from "../../common/api";

export function* watchFetchSearchTracks() {
    yield takeEvery(FETCHED_SEARCH_TRACKS, fetchSearchTracksAsync);
}

export function* watchFetchSearchTracksByPage() {
    yield takeEvery(FETCHED_SEARCH_TRACKS_BY_PAGE, fetchSearchTracksByPageAsync);
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

export function* fetchSearchTracksAsync({payload: query}) {
    try {
        const lastQuery = yield select(getLastQuery);
        if (lastQuery !== query) {
            yield put(resetSearchTracks());
            yield put(requestSearchTracks());
            const data = yield call(tracksApi.getTracks, query);
            yield put(requestSearchTracksSuccess({...data, query}));
        }
    } catch (error) {
        yield put(requestSearchTracksError());
    }
}