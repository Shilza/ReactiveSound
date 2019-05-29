import {
    getCountOfLikedTracks, getCountOfUsersTracks,
    getCurrentLikedTracksUserId,
    getCurrentUserId,
    getCurrentUserTracksUserId, getLikedTracksNextPage, getUsersTracksNextPage
} from "./index";

describe('User\'s feature selectors', () => {
    it('getCurrentUserId', () => {
        const userId = 5;
        const state = {
            user: {
                likedTracks: {
                    userId
                }
            }
        };
        expect(getCurrentUserId(state)).toBe(userId);
    });

    it('getCurrentLikedTracksUserId', () => {
        const userId = 5;
        const state = {
            user: {
                likedTracks: {
                    userId
                }
            }
        };
        expect(getCurrentLikedTracksUserId(state)).toBe(userId);
    });

    it('getCurrentUserTracksUserId', () => {
        const userId = 5;
        const state = {
            user: {
                tracks: {
                    userId
                }
            }
        };
        expect(getCurrentUserTracksUserId(state)).toBe(userId);
    });

    it('getCountOfLikedTracks', () => {
        const state = {
            user: {
                likedTracks: {
                    data: [{}, {}, {}]
                }
            }
        };

        expect(getCountOfLikedTracks(state)).toBe(3);
    });

    it('getCountOfUsersTracks', () => {
        const state = {
            user: {
                tracks: {
                    data: [{}, {}, {}]
                }
            }
        };

        expect(getCountOfUsersTracks(state)).toBe(3);
    });

    it('getUsersTracksNextPage', () => {
        const nextPage = 'nextPage';
        const state = {
            user: {
                tracks: {
                    nextPage
                }
            }
        };

        expect(getUsersTracksNextPage(state)).toBe(nextPage);
    });

    it('getUsersTracksNextPage', () => {
        const nextPage = 'nextPage';
        const state = {
            user: {
                likedTracks: {
                    nextPage
                }
            }
        };

        expect(getLikedTracksNextPage(state)).toBe(nextPage);
    });
});