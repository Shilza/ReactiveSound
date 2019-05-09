
export const getCurrentUserId = state => state.user.likedTracks.userId;

export const getCurrentLikedTracksUserId = state => state.user.likedTracks.userId;

export const getCurrentUserTracksUserId = state => state.user.tracks.userId;

export const getCountOfLikedTracks = state => state.user.likedTracks.data.length;

export const getCountOfUsersTracks = state => state.user.tracks.data.length;

export const getUsersTracksNextPage = state => state.user.tracks.nextPage;

export const getLikedTracksNextPage = state => state.user.likedTracks.nextPage;