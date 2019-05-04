import {call, put, select, takeLatest} from "redux-saga/effects";
import SC from "soundcloud";
import {requestUsersLikedTracks, requestUsersLikedTracksError, requestUsersLikedTracksSuccess} from "../actionCreators";
import {FETCHED_USERS_LIKED_TRACKS} from "../actionTypes";
import {fetchWaveform} from "../../search/actionCreators";
import {getCurrentUserId} from "../selectors";

export function* watchFetchUsersLikedTracks() {
    yield takeLatest(FETCHED_USERS_LIKED_TRACKS, fetchUsersLikedTracksAsync);
}

function* fetchUsersLikedTracksAsync({payload: id}) {
    try {
        const currentUserId = yield select(getCurrentUserId);

        console.log(currentUserId, id);
        if (id !== currentUserId) {
            yield put(requestUsersLikedTracks());
            const data = yield call(() => {
                    return SC.get(`/users/${id}/favorites`, {
                        limit: 20
                    }).then(tracks => tracks);
                }
            );
            yield put(requestUsersLikedTracksSuccess(data));
        }
    }
    catch (error) {
        yield put(requestUsersLikedTracksError());
    }
}
