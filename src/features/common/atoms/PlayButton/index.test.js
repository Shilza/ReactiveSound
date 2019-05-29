import React from 'react';
import {fireEvent, render, waitForDomChange} from 'react-testing-library';
import {PlayButton} from "./index";
import {Provider} from "react-redux";
import {tracksApi} from '../../api';
import store from "../../../../store";

jest.mock('../../api');

const trackId = 5;

const resolvedValue = {
    player: {
        play: jest.fn(),
        currentTime: () => 0
    },
    currentTrack: {
        id: trackId
    }
};
tracksApi.getTrackById.mockResolvedValue(resolvedValue);

describe('<PlayButton/> common atom', () => {

    it('should start play sound and change button\'s state', () => {

        const {container, getByTestId} = render(
            <Provider store={store}>
                <PlayButton id={trackId}/>
            </Provider>
        );

        const button = getByTestId('playButton');

        expect(button).toHaveAttribute('aria-label', 'Play');

        fireEvent.click(button);

        const spy = jest.spyOn(resolvedValue.player, 'play');

        waitForDomChange(container)
            .then(() => {
                expect(spy).toHaveBeenCalledTimes(1);
                expect(button).toHaveAttribute('aria-label', 'Pause');
            })
            .catch(err => console.log(`Error: ${err}`));
    });
});
