import {FETCHED_SEARCH_TRACKS} from "../actionTypes";
import {call, put, select, takeLatest} from "redux-saga/effects";
import SC from "soundcloud";
import {requestSearchTracks, requestSearchTracksError, requestSearchTracksSuccess} from "../actionCreators";
import {getLastQuery} from "../selectors";

export function* watchFetchSearchTracks() {
    yield takeLatest(FETCHED_SEARCH_TRACKS, fetchSearchTracksAsync);
}

function* fetchSearchTracksAsync({payload: query}) {
    try {
        const lastQuery = yield select(getLastQuery);
        if (lastQuery !== query) {
            yield put(requestSearchTracks());
            const data = yield call(() => {
                    return SC.get('/tracks', {
                        q: query,
                        limit: 20
                    }).then(tracks => tracks);
                }
            );
            yield put(requestSearchTracksSuccess({data, query}));
        }
    } catch (error) {
        yield put(requestSearchTracksError());
    }
}