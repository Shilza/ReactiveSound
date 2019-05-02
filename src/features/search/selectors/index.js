
export const getSearchTracks = state => state.search.search.tracks;

export const getWaveformUrlById = (tracks, id) => {
    let track = tracks.find(item => item.id === id);
    return track.waveform_url;
};

export const getLastQuery = state => state.search.search.query;