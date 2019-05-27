import {getFavoriteTracksNextPage} from "./index";

describe('Test favorites selectors', () => {
    it('getFavoriteTracksNextPage should return nextPage', () => {
        const state = {
            favorite: {
                tracks: {
                    nextPage: 'nextPage'
                }
            }
        };
        expect(getFavoriteTracksNextPage(state)).toEqual(state.favorite.tracks.nextPage);
    });
});