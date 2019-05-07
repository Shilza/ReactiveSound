import {call, put, select, takeEvery} from "redux-saga/effects";
import {playTrack, setPlayer} from "../actionCreators";
import SC from "soundcloud";
import {FETCHED_NEXT, FETCHED_PREVIOUS, FETCHED_TRACK} from "../actionTypes";
import {
    getCurrentTrackId,
    getNextTrack,
    getPreviousTrack,
    getTrackById,
    getTracks
} from "../selectors";

export function* watchFetchTrack() {
    yield takeEvery(FETCHED_TRACK, fetchTrack);
}

export function* watchFetchNext() {
    yield takeEvery(FETCHED_NEXT, fetchNext);
}

export function* watchFetchPrevious() {
    yield takeEvery(FETCHED_PREVIOUS, fetchPrevious);
}

function* fetchNext({payload: location}) {
    try {
        const track = yield select(getNextTrack, location);
        const data = yield call(() =>
            SC.stream(`/tracks/${track.id}`).then(sound =>
                ({
                    player: sound,
                    currentTrack: track
                })
            )
        );
        yield put(setPlayer(data));
        yield put(playTrack());
    } catch(error) {
        console.error(error);
    }
}

function* fetchPrevious({payload: location}) {
    try {
        const track = yield select(getPreviousTrack, location);
        const data = yield call(() =>
            SC.stream(`/tracks/${track.id}`).then(sound =>
                ({
                    player: sound,
                    currentTrack: track
                })
            )
        );
        yield put(setPlayer(data));
        yield put(playTrack());
    } catch (error) {
        console.error(error);
    }
}

function* fetchTrack({payload: id}) {
    try {
        const currentTrackId = yield select(getCurrentTrackId);
        const tracks = yield select(getTracks);
        const track = getTrackById(tracks, id);

        // Prevent downloading the same song
        if (currentTrackId !== id) {
            const data = yield call(() =>
                SC.stream(`/tracks/${id}`).then(sound =>
                    ({
                        player: sound,
                        currentTrack: track
                    })
                )
            );
            yield put(setPlayer(data));
            yield put(playTrack());
        }
    } catch (error) {
        console.error(error);
    }
}