import {call, put, select, takeEvery} from "redux-saga/effects";
import {getWaveformTracks, getWaveformUrlById} from "../../search/selectors/index";
import {FETCHED_WAVEFORM_TRACKS} from "../actionTypes";
import {requestWaveformSuccess} from "../actionCreators";

export function* watchFetchWaveform() {
    yield takeEvery(FETCHED_WAVEFORM_TRACKS, fetchWaveformAsync);
}

function* fetchWaveformAsync({payload: id}) {
    const tracks = yield select(getWaveformTracks);
    const url = yield call(getWaveformUrlById, tracks, id);
    const response = yield call(fetch, url);
    const data = yield call([response, response.json]);
    yield put(requestWaveformSuccess({id, data}));
}