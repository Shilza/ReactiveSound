
const convertMsToString = ms => {
    let minutes = Math.floor(ms / (1000 * 60));
    let seconds = Math.floor((ms - minutes * 1000 * 60) / 1000);
    return minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
};

const convertStringToMs = string => {
    let minutes = parseInt(string.substr(0, 2));
    let seconds = parseInt(string.substr(3, 5));
    return minutes * 1000 * 60 + seconds * 1000;
};

export {
    convertMsToString,
    convertStringToMs
};