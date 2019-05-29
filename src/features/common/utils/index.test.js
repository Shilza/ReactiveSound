import {convertMsToString, getUnique, transformTrack} from "./index";

describe('Common utils', () => {

    it('convertMsToString', () => {
        expect(convertMsToString(426645)).toBe('07:06');
        expect(convertMsToString(253097)).toBe('04:13');
        expect(convertMsToString(185773)).toBe('03:05');
    });

    it('transformTrack', () => {
        const track = {
            artwork_url: 'https://i1.sndcdn.com/artworks-000247567530-ysnxiq-large.jpg',
            waveform_url: 'https://w1.sndcdn.com/x0EFQZq82Fp3_m.png'
        };

        expect(transformTrack(track)).toEqual({
            artwork_url: 'https://i1.sndcdn.com/artworks-000247567530-ysnxiq-t250x250.jpg',
            waveform_url: 'https://w1.sndcdn.com/x0EFQZq82Fp3_m.json'
        });
    });

    it('getUnique', () => {
        const array = [
            { id: 1 },
            { id: 2 },
            { id: 1 },
            { id: 2 },
            { id: 2 },
            { id: 3 }
        ];

        expect(getUnique(array)).toEqual([
            { id: 1 },
            { id: 2 },
            { id: 3 }
        ]);
    });

    it('getUnique should return empty array', () => {
        expect(getUnique()).toEqual([]);
    });
});