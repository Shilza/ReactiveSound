import SC from "soundcloud";

const LIMIT = 22;
const LINKED_PARTITIONING = 1;

const get = (url, body) => SC.get(url, {
    limit: LIMIT,
    linked_partitioning: LINKED_PARTITIONING,
    ...body
}).then(tracks => tracks);

const getTrackById = track =>
    SC.stream(`/tracks/${track.id}`).then(sound =>
        ({
            player: sound,
            currentTrack: track
        })
    );

const getFavorites = (id = 185676792) => get(`/users/${id}/favorites`);

const getUsersTracksById = id => get(`/users/${id}/tracks`);

const getTracks = query => get('/tracks', {q: query});

const getUserById = id => get(`/users/${id}`);

export const tracksApi = {
    getTrackById,
    getFavorites,
    getTracks,
    getUsersTracksById,
    getUserById
};