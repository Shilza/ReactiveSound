import {getNextTrack, getPreviousTrack, getTrackById, getTracks, getTracksByLocation} from "./index";

const state = {
    player: {
        currentTrack: {
            id: 5
        }
    },
    search: {
        tracks: [
            {
                id: 123,
                duration: 123000,
                title: 'Title0'
            },
            {
                id: 5
            },
            {
                id: 228,
                duration: 228000,
                title: 'Title2'
            }
        ]
    },
    user: {
        tracks: {
            data: []
        },
        likedTracks: {
            data: []
        }
    },
    favorite: {
        tracks: {
            tracks: []
        }
    }
};

describe('Test common selectors', () => {
    it('should return next track', () => {
        expect(getNextTrack(state, 'search')).toEqual(state.search.tracks[2]);
    });

    it('should return previous track', () => {
        expect(getPreviousTrack(state, 'search')).toEqual(state.search.tracks[0]);
    });

    it('should return tracks by location', () => {
        expect(getTracksByLocation(state, 'search')).toEqual(state.search.tracks);
        expect(getTracksByLocation(state, 'tracks')).toEqual(state.user.tracks.data);
        expect(getTracksByLocation(state, 'liked')).toEqual(state.user.likedTracks.data);
        expect(getTracksByLocation(state, 'favorite')).toEqual(state.favorite.tracks.tracks);
    });

    it('should return track by id', () => {
        expect(getTrackById(state.search.tracks, 228)).toEqual(state.search.tracks[2]);
    });

    it('should return only tracks', () => {
        expect(getTracks(state)).toEqual([
                {"duration": 123000, "id": 123, "title": "Title0"},
                {"id": 5},
                {"duration": 228000, "id": 228, "title": "Title2"}
            ]
        );
    });
});