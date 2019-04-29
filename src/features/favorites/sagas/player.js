import {call, put, select, takeEvery} from "redux-saga/effects";
import {setPlayer} from "../actionCreators";
import SC from "soundcloud";
import {FETCHED_NEXT, FETCHED_PREVIOUS, FETCHED_TRACK} from "../actionTypes";
import {getCurrentTrackId, getNextTrack, getPreviousTrack} from "../selectors";

export function* watchFetchTrack() {
    yield takeEvery(FETCHED_TRACK, fetchTrack);
}

export function* watchFetchNext() {
    yield takeEvery(FETCHED_NEXT, fetchNext);
}

export function* watchFetchPrevious() {
    yield takeEvery(FETCHED_PREVIOUS, fetchPrevious);
}

function* fetchNext() {
    const track = yield select(getNextTrack);
    const data = yield call(() => {
            return SC.stream(`/tracks/${track.id}`).then(sound =>
                ({
                    player: sound,
                    currentTrack: track
                })
            );
        }
    );
    yield put(setPlayer(data));
}

function* fetchPrevious() {
    const track = yield select(getPreviousTrack);
    const data = yield call(() => {
            return SC.stream(`/tracks/${track.id}`).then(sound =>
                ({
                    player: sound,
                    currentTrack: track
                })
            );
        }
    );
    yield put(setPlayer(data));
}

function* fetchTrack({ payload }) {
    const currentTrackId = yield select(getCurrentTrackId);

    // Prevent downloading the same song
    if (currentTrackId !== payload.id) {
        const data = yield call(() => {
                return SC.stream(`/tracks/${payload.id}`).then(sound =>
                    ({
                        player: sound,
                        currentTrack: payload
                    })
                );
            }
        );
        yield put(setPlayer(data));
    }
}