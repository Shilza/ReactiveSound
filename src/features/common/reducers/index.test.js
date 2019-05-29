import {SEEK_TO, SET_CURRENT_TIME, SET_PLAYER, SET_PLAYER_INTERVAL} from "../actionTypes";
import {initialState, playerReducer as reducer} from "./index";

describe('Common reducer', () => {
    it('SET_PLAYER action', () => {
        const action = {
            type: SET_PLAYER,
            payload: {
                player: {},
                currentTrack: {}
            }
        };

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            player: action.payload.player,
            currentTrack: action.payload.currentTrack
        })
    });

    it('SET_PLAYER_INTERVAL action', () => {
        const action = {
            type: SET_PLAYER_INTERVAL,
            payload: 4
        };

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            trackIntervalId: action.payload
        })
    });

    it('SET_CURRENT_TIME action', () => {
        const action = {
            type: SET_CURRENT_TIME,
            payload: 0
        };

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            currentTime: action.payload
        })
    });

    it('SEEK_TO action', () => {
        const action = {
            type: SEEK_TO,
            payload: 200
        };

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            currentTime: action.payload
        })
    });
});