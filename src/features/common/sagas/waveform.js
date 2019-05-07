import {call, put, select, spawn, take} from "redux-saga/effects";
import {getWaveformTracks, getWaveformUrlById} from "../../search/selectors/index";
import {FETCHED_WAVEFORM_TRACKS} from "../actionTypes";
import {requestWaveformSuccess} from "../actionCreators";

export function* watchFetchWaveform() {
    while (true) {
        const action = yield take(FETCHED_WAVEFORM_TRACKS);
        yield spawn(fetchWaveformAsync, action);
    }
}

function* fetchWaveformAsync({payload: id}) {
    const tracks = yield select(getWaveformTracks);
    const url = getWaveformUrlById(tracks, id);
    const response = yield call(fetch, url);
    const data = yield call([response, response.json]);
    yield put(requestWaveformSuccess({id, data}));
}