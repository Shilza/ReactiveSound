import {expectSaga} from "redux-saga-test-plan";
import * as matchers from 'redux-saga-test-plan/matchers';
import {select} from 'redux-saga/effects';
import {watchFetchWaveform} from "./waveform";
import {fetchWaveform, requestWaveformSuccess} from "../actionCreators";
import {getWaveformTracks, getWaveformUrlById} from "../../search/selectors";

describe('Test waveform sagas', () => {
    beforeEach(() => {
        fetch.resetMocks()
    });

    it('fetch waveform saga runs', () => {
        const trackId = 5;
        const data = {};
        fetch.mockResponseOnce(JSON.stringify(data));

        return expectSaga(watchFetchWaveform)
            .provide([
                [select(getWaveformTracks), []],
                [matchers.call.fn(getWaveformUrlById)]
            ])
            .put(requestWaveformSuccess({
                id: trackId,
                data
            }))
            .dispatch(fetchWaveform(trackId))
            .silentRun();
    });
});