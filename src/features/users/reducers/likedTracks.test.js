import {initialState, likedTracks as reducer} from "./likedTracks";
import {getUnique, setWaveform, transformTrack} from "../../common/utils";
import {
    REQUESTED_USERS_LIKED_TRACKS,
    REQUESTED_USERS_LIKED_TRACKS_FAILED,
    REQUESTED_USERS_LIKED_TRACKS_SUCCEED,
    RESET_LIKED_TRACKS
} from "../actionTypes";
import {REQUESTED_WAVEFORM_SUCCEED} from "../../common/actionTypes";

describe('Liked tracks reducer', () => {
    it('REQUESTED_USERS_LIKED_TRACKS action', () => {
        const action = {
            type: REQUESTED_USERS_LIKED_TRACKS
        };

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            loading: true,
            error: false
        });
    });

    it('REQUESTED_USERS_LIKED_TRACKS_SUCCEED action', () => {
        const action = {
            type: REQUESTED_USERS_LIKED_TRACKS_SUCCEED,
            payload: {
                collection: [],
                next_href: 'next_href',
                userId: 5
            }
        };

        expect(reducer(initialState, action)).toEqual({
            data: getUnique(initialState.data.concat(action.payload.collection.map(transformTrack))),
            nextPage: action.payload.next_href,
            userId: action.payload.userId,
            loading: false,
            error: false
        });
    });

    it('REQUESTED_USERS_LIKED_TRACKS_FAILED action', () => {
        const action = {
            type: REQUESTED_USERS_LIKED_TRACKS_FAILED
        };

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            loading: false,
            error: true
        });
    });

    it('REQUESTED_WAVEFORM_SUCCEED action', () => {
        const action = {
            type: REQUESTED_WAVEFORM_SUCCEED
        };

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            data: initialState.data.map(track => setWaveform(track, action.payload))
        });
    });

    it('RESET_LIKED_TRACKS action', () => {
        const action = {
            type: RESET_LIKED_TRACKS
        };

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            data: [],
            nextPage: undefined
        });
    });
});