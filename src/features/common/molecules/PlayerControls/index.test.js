import React from 'react';
import {fireEvent, render} from 'react-testing-library';
import PlayerControls from './index';
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';
import {fetchNext, fetchPrevious} from "../../actionCreators";
import {BrowserRouter as Router} from "react-router-dom";

const mockStore = configureStore();

describe('Test PlayerControls', () => {

    const trackId = 5;
    const path = "/";
    const store = mockStore();

    it('should fetch previous track', () => {

        const {getByTestId} = render(
            <Provider store={store}>
                <Router>
                    <PlayerControls currentTrackId={trackId}/>
                </Router>
            </Provider>
        );

        const previous = getByTestId('previousButton');

        fireEvent.click(previous);

        expect(store.getActions()[0]).toEqual(fetchPrevious(path));
    });

    it('should fetch next track', () => {

        const {getByTestId} = render(
            <Provider store={store}>
                <Router>
                    <PlayerControls currentTrackId={trackId}/>
                </Router>
            </Provider>
        );

        const next = getByTestId('nextButton');

        fireEvent.click(next);

        expect(store.getActions()[1]).toEqual(fetchNext(path));
    });
});
