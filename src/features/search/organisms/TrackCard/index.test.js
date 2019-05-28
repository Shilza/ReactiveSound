import React from "react";
import {render} from 'react-testing-library';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import TrackCard from './index';
import {BrowserRouter as Router} from "react-router-dom";

describe('Test search TrackCard', () => {
    const username = 'Username';
    const id = 5;
    const userId = 5;
    const playbackCount = 100;
    const link = 'link';
    const title = 'title';
    const duration = 200;
    const likesCount = 200;

    const mockStore = configureStore();
    const store = mockStore();

    const {container, getByTestId} = render(
        <Provider store={store}>
            <Router>
                <TrackCard
                    username={username}
                    id={id}
                    userId={userId}
                    playbackCount={playbackCount}
                    link={link}
                    title={title}
                    duration={duration}
                    likesCount={likesCount}
                />
            </Router>
        </Provider>
    );

    it('should renders correctly', () => {
        expect(container.firstChild).toMatchSnapshot();
    });

    it('should have correct user\'s link', () => {
        const userLink = getByTestId('userLink');
        expect(userLink).toHaveAttribute('href', `/users/${userId}/tracks`);
    });

    it('should have correct track link', () => {
        const userLink = getByTestId('trackLink');
        expect(userLink).toHaveAttribute('href', link);
    });
});