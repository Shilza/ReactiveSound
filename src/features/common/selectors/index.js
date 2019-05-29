export const getCurrentTrackId = state => state.player.currentTrack?.id;

export const getNextTrack = (state, location) => {
    let id = state.player.currentTrack.id;
    let nextTrack = undefined;

    let tracks = getTracksByLocation(state, location);
    tracks.forEach((item, index, array) => {
        if (item.id === id) {
            if (array.length - 1 >= index + 1)
                nextTrack = array[index + 1];
            else
                nextTrack = array[0];
        }
    });

    if (Object.is(nextTrack, undefined))
        nextTrack = tracks[0];

    return {
        id: nextTrack.id,
        duration: nextTrack.duration,
        title: nextTrack.title
    };
};

export const getPreviousTrack = (state, location) => {
    let id = state.player.currentTrack.id;
    let previousTrack = undefined;

    let tracks = getTracksByLocation(state, location);
    tracks.forEach((item, index, array) => {
        if (item.id === id) {
            if (index - 1 >= 0)
                previousTrack = array[index - 1];
            else
                previousTrack = array[array.length - 1];
        }
    });

    if (Object.is(previousTrack, undefined))
        previousTrack = tracks[0];

    return {
        id: previousTrack.id,
        duration: previousTrack.duration,
        title: previousTrack.title
    };
};

export const getTracksByLocation = (state, location) => {
    if (location.includes('search'))
        return state.search.tracks;
    else if (location.includes('tracks'))
        return state.user.tracks.data;
    else if (location.includes('liked'))
        return state.user.likedTracks.data;
    else
        return state.favorite.tracks.tracks;
};

export const getTracks = state => [
    ...state.favorite?.tracks?.tracks,
    ...state.search?.tracks,
    ...state.user?.tracks?.data,
    ...state.user?.likedTracks?.data
];

export const getTrackById = (tracks, id) => tracks.find(item => item.id === id);