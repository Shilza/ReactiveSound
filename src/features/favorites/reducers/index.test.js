import {tracks as reducer} from "./tracks";
import {
    REQUESTED_FAVORITE_TRACKS,
    REQUESTED_FAVORITE_TRACKS_FAILED,
    REQUESTED_FAVORITE_TRACKS_SUCCEED
} from "../actionTypes";
import {initialState} from "./tracks";
import {transformTrack} from "../../common/utils";

describe('Favorites feature reducer', () => {
    it('REQUESTED_FAVORITE_TRACKS action', () => {
        const action = {
            type: REQUESTED_FAVORITE_TRACKS
        };

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            loading: true,
            error: false
        })
    });

    it('REQUESTED_FAVORITE_TRACKS_SUCCEED action', () => {
        const action = {
            type: REQUESTED_FAVORITE_TRACKS_SUCCEED,
            payload: {
                next_href: 'href',
                collection: [
                    { id: 5 }
                ]
            }
        };

        expect(reducer(initialState, action)).toEqual({
            tracks: initialState.tracks.concat(action.payload.collection.map(transformTrack)),
            nextPage: action.payload.next_href,
            loading: false,
            error: false
        })
    });

    it('REQUESTED_FAVORITE_TRACKS_FAILED action', () => {
        const action = {
            type: REQUESTED_FAVORITE_TRACKS_FAILED
        };

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            loading: false,
            error: true
        })
    });
});