import {FETCHED_SEARCH_TRACKS} from "../actionTypes";
import {call, put, takeLatest} from "redux-saga/effects";
import SC from "soundcloud";
import {requestFavoriteTracks} from "../../favorites/actionCreators";
import {requestSearchTracksError, requestSearchTracksSuccess} from "../actionCreators";

export function* watchFetchSearchTracks() {
    yield takeLatest(FETCHED_SEARCH_TRACKS, fetchSearchTracksAsync);
}

function* fetchSearchTracksAsync({payload}) {
    try {
        yield put(requestFavoriteTracks());
        const data = yield call(() => {
                return SC.get('/tracks', {
                    q: payload,
                    limit:60
                }).then(tracks => tracks);
            }
        );
        yield put(requestSearchTracksSuccess(data));
    } catch (error) {
        yield put(requestSearchTracksError());
    }
}