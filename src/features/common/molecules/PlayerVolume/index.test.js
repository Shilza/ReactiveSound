import React from 'react';
import {fireEvent, render} from 'react-testing-library';
import {PlayerVolume} from "./index";

describe('Test PlayerControls', () => {

    const player = {
        _volume: 1,
        getVolume: function () {
            return this._volume;
        },
        setVolume: function (volume) {
            this._volume = volume;
        }
    };

    it('should have correct volume value', () => {

        const {getByTestId} = render(
            <PlayerVolume player={player}/>
        );

        const range = getByTestId('volumeRange');

        expect(range).toHaveAttribute('value', '100');
    });

    it('should change value by step', () => {

        const {getByTestId} = render(
            <PlayerVolume player={player}/>
        );

        const range = getByTestId('volumeRange');

        fireEvent.change(range, {
            target: {
                value: 50
            }
        });
        expect(range).toHaveAttribute('value', '50');
    });
});
