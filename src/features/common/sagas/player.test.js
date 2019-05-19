import {expectSaga} from "redux-saga-test-plan";
import {fetchTrack, watchFetchNext, watchFetchPrevious, watchFetchTrack} from "./player";
import {select} from 'redux-saga/effects';
import * as actions from "../actionCreators";
import {getCurrentTrackId, getNextTrack, getPreviousTrack, getTrackById, getTracks} from "../selectors";
import * as matchers from 'redux-saga-test-plan/matchers';
import {tracksApi} from "../api";

describe('Test player sagas', () => {
    it('fetch track saga runs', () => {
        const track = {id: 5};
        const data = {
            player: {},
            currentTrack: track
        };

        return expectSaga(fetchTrack)
            .provide([
                [matchers.call.fn(tracksApi.getTrackById), data]
            ])
            .put(actions.setPlayer(data))
            .put(actions.playTrack())
            .silentRun();
    });

    it('fetchTrackById saga runs', () => {
        const id = 5;
        const track = {id};
        const data = {
            player: {},
            currentTrack: track
        };

        return expectSaga(watchFetchTrack)
            .provide([
                [select(getCurrentTrackId), id],
                [select(getTracks), [track]],
                [matchers.call.fn(getTrackById), track],
                [matchers.call.fn(tracksApi.getTrackById), data]
            ])
            .call(fetchTrack, track)
            .dispatch(actions.fetchTrack())
            .silentRun();
    });

    it('fetchNext saga runs', () => {
        const track = {id: 5};
        const data = {
            player: {},
            currentTrack: track
        };
        const location = 'favorites';

        return expectSaga(watchFetchNext)
            .provide([
                [select(getNextTrack, location), track],
                [matchers.call.fn(tracksApi.getTrackById), data]
            ])
            .call(fetchTrack, track)
            .dispatch(actions.fetchNext(location))
            .silentRun();
    });

    it('fetchPrevious saga runs', () => {
        const track = {id: 5};
        const data = {
            player: {},
            currentTrack: track
        };
        const location = 'favorites';

        return expectSaga(watchFetchPrevious)
            .provide([
                [select(getPreviousTrack, location), track],
                [matchers.call.fn(tracksApi.getTrackById), data]
            ])
            .call(fetchTrack, track)
            .dispatch(actions.fetchPrevious(location))
            .silentRun();
    });
});
