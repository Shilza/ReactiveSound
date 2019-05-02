export const getCurrentTrackId = store => store.favorite.player.currentTrack && store.favorite.player.currentTrack.id;

export const getNextTrack = store => {
    let id = store.favorite.player.currentTrack.id;
    let nextTrack = {};
    store.favorite.tracks.tracks.forEach((item, index, array) => {
        if (item.id === id) {
            if (array.length - 1 >= index + 1)
                nextTrack = array[index + 1];
            else
                nextTrack = array[0];
        }
    });

    return {
        id: nextTrack.id,
        duration: nextTrack.duration,
        title: nextTrack.title
    };
};

export const getPreviousTrack = store => {
    let id = store.favorite.player.currentTrack.id;
    let previousTrack = {};
    store.favorite.tracks.tracks.forEach((item, index, array) => {
        if (item.id === id) {
            if (index - 1 >= 0)
                previousTrack = array[index - 1];
            else
                previousTrack = array[array.length - 1];
        }
    });

    return {
        id: previousTrack.id,
        duration: previousTrack.duration,
        title: previousTrack.title
    };
};

export const getTracks = store => [...store.favorite.tracks.tracks, ...store.search.search.tracks];

export const getTrackById = (tracks, id) => tracks.find(item => item.id === id);