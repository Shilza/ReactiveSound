import {call, put, select, takeEvery} from "redux-saga/effects";
import {playTrack, setPlayer} from "../actionCreators";
import {FETCHED_NEXT, FETCHED_PREVIOUS, FETCHED_TRACK} from "../actionTypes";
import {getCurrentTrackId, getNextTrack, getPreviousTrack, getTrackById, getTracks} from "../selectors";
import {tracksApi} from "../api";

export function* watchFetchTrack() {
    yield takeEvery(FETCHED_TRACK, fetchTrackById);
}

export function* watchFetchNext() {
    yield takeEvery(FETCHED_NEXT, fetchNext);
}

export function* watchFetchPrevious() {
    yield takeEvery(FETCHED_PREVIOUS, fetchPrevious);
}

export function* fetchTrack(track) {
    const data = yield call(tracksApi.getTrackById, track);
    yield put(setPlayer(data));
    yield put(playTrack());
}

function* fetchNext({payload: location}) {
    try {
        const track = yield select(getNextTrack, location);
        yield call(fetchTrack, track);
    } catch(error) {
        console.error(error);
    }
}

function* fetchPrevious({payload: location}) {
    try {
        const track = yield select(getPreviousTrack, location);
        yield call(fetchTrack, track);
    } catch (error) {
        console.error(error);
    }
}

function* fetchTrackById({payload: id}) {
    try {
        const currentTrackId = yield select(getCurrentTrackId);
        const tracks = yield select(getTracks);
        const track = yield call(getTrackById, tracks, id);

        // Prevent downloading the same song
        if (currentTrackId !== id)
           yield call(fetchTrack, track);
    } catch (error) {
        console.error(error);
    }
}