const convertMsToString = (ms = 0) => {
    let minutes = Math.floor(ms / (1000 * 60));
    let seconds = Math.floor((ms - minutes * 1000 * 60) / 1000);
    return minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
};

const transformTrack = track => {
    if (track.artwork_url)
        track.artwork_url = track.artwork_url.substr(0, track.artwork_url.length - 9) + 't250x250.jpg';
    else
        track.artwork_url = track.user.avatar_url.substr(0, track.user.avatar_url.length - 9) + 't250x250.jpg';

    track.waveform_url = track.waveform_url.replace('.png', '.json');

    return track;
};

const setWaveform = (track, {id, data}) => {
    if (track.id === id) {
        track.waveform = data;
        return {...track};
    }

    return track;
};

const getUnique = (array = []) => {
    const result = [];
    const map = new Map();
    for (const item of array) {
        if (!map.has(item.id)) {
            map.set(item.id, true);
            result.push(item);
        }
    }
    return result;
};

const getDisplayName = (WrappedComponent, name) => WrappedComponent.displayName || WrappedComponent.name || name;

export {
    convertMsToString,
    transformTrack,
    setWaveform,
    getUnique,
    getDisplayName
};