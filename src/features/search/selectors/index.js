
export const getWaveformTracks = state => [...state.search.tracks, ...state.user.tracks.data, ...state.user.likedTracks.data];

export const getWaveformUrlById = (tracks, id) => tracks.find(item => item.id === id).waveform_url;

export const getSearchTrackNextPage = state => state.search?.nextPage;

export const getLastQuery = state => state.search?.query;