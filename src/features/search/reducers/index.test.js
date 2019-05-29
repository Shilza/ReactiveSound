import {initialState, searchReducer as reducer} from "./index";
import {
    REQUESTED_SEARCH_TRACKS,
    REQUESTED_SEARCH_TRACKS_FAILED,
    REQUESTED_SEARCH_TRACKS_SUCCEED,
    RESET_SEARCH_TRACKS
} from "../actionTypes";
import {getUnique, setWaveform, transformTrack} from "../../common/utils";
import {REQUESTED_WAVEFORM_SUCCEED} from "../../common/actionTypes";

describe('Search feature reducer', () => {
    it('REQUESTED_SEARCH_TRACKS action', () => {
        const action = {
            type: REQUESTED_SEARCH_TRACKS
        };

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            loading: true,
            error: false
        })
    });

    it('REQUESTED_SEARCH_TRACKS_SUCCEED action', () => {
        const action = {
            type: REQUESTED_SEARCH_TRACKS_SUCCEED,
            payload: {
                collection: [],
                next_href: 'next_href',
                query: 'query'
            }
        };

        expect(reducer(initialState, action)).toEqual({
            tracks: getUnique(initialState.tracks.concat(action.payload.collection.map(transformTrack))),
            nextPage: action.payload.next_href,
            query: action.payload.query,
            loading: false,
            error: false
        })
    });

    it('REQUESTED_SEARCH_TRACKS_FAILED action', () => {
        const action = {
            type: REQUESTED_SEARCH_TRACKS_FAILED
        };

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            loading: false,
            error: true
        })
    });

    it('REQUESTED_WAVEFORM_SUCCEED action', () => {
        const action = {
            type: REQUESTED_WAVEFORM_SUCCEED,
            payload: [

            ]
        };

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            tracks: initialState.tracks.map(track => setWaveform(track, action.payload))
        })
    });

    it('RESET_SEARCH_TRACKS action', () => {
        const action = {
            type: RESET_SEARCH_TRACKS
        };

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            tracks: [],
            nextPage: undefined
        })
    });
});