
export const getWaveformTracks = state => [...state.search.search.tracks, ...state.user.tracks.data, ...state.user.likedTracks.data];

export const getWaveformUrlById = (tracks, id) => {
    let track = tracks.find(item => item.id === id);
    return track.waveform_url;
};

export const getSearchTrackNextPage = state => state.search.search.nextPage;

export const getLastQuery = state => state.search.search.query;