import {getLastQuery, getSearchTrackNextPage, getWaveformTracks, getWaveformUrlById} from "./index";

describe('Test search selectors', () => {
    it('getWaveformTracks should return only tracks with waveform', () => {
        const state = {
            search: {
                tracks: []
            },
            user: {
                tracks: {
                    data: []
                },
                likedTracks: {
                    data: []
                }
            }
        };

        expect(getWaveformTracks(state)).toEqual([...state.search.tracks, ...state.user.tracks.data, ...state.user.likedTracks.data]);
    });

    it('getWaveformUrlById should return waveform url by track id', () => {
        const tracks = [
            { id: 1, waveform_url: 'waveform_url1' },
            { id: 2, waveform_url: 'waveform_url2' },
            { id: 3, waveform_url: 'waveform_url3'}
        ];
        expect(getWaveformUrlById(tracks, 2)).toBe(tracks[1].waveform_url);
    });

    it('getSearchTrackNextPage should return nextPage', () => {
        const state = {
            search: {
                nextPage: 'nexPage'
            }
        };

        expect(getSearchTrackNextPage(state)).toBe(state.search.nextPage);
    });

    it('getLastQuery should return last query', () => {
        const state = {
            search: {
                query: 'query'
            }
        };

        expect(getLastQuery(state)).toBe(state.search.query);
    });
});