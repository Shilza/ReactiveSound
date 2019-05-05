
export const getCurrentUserId = state => state.user.user.data && state.user.user.data.id;

export const getCountOfLikedTracks = state => state.user.likedTracks.data.length;

export const getCountOfUsersTracks = state => state.user.tracks.data.length;

export const getUsersTracksNextPage = state => state.user.tracks.nextPage;

export const getLikedTracksNextPage = state => state.user.likedTracks.nextPage;