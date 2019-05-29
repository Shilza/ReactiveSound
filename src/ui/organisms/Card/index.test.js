import React from "react";
import {cleanup, render} from 'react-testing-library';
import {Card} from "./index";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {BrowserRouter as Router} from "react-router-dom";

describe('<Card/> organism', () => {
    const mockStore = configureStore();
    const store = mockStore({});

    const currentTrackId = 5;

    const item = {
        id: currentTrackId,
        title: 'title',
        duration: 220000,
        cover: 'artwork_url',
        user: {
            id: 5,
            username: 'Username',
            permalink_url: 'permalink_url'
        }
    };

    const {container, queryByTestId, getByTestId} = render(
        <Provider store={store}>
            <Router>
                <Card
                    item={item}
                    currentTrackId={currentTrackId}
                />
            </Router>
        </Provider>
    );

    it('should have timeLine', () => {
        const timeLine = queryByTestId('timeLine');
        expect(container.firstChild).toContainElement(timeLine);
    });

    it('should not have timeLine', () => {
        cleanup();

        const {queryByTestId} = render(
            <Provider store={store}>
                <Router>
                    <Card
                        item={item}
                        currentTrackId={4}
                    />
                </Router>
            </Provider>
        );

        const timeLine = queryByTestId('timeLine');
        expect(timeLine).toBeNull();
    });

    describe('link', () => {
        const link = getByTestId('cardBodyTracksLink');

        it('should have correct path', () => {
            expect(link).toHaveAttribute('href', `/users/${item.user.id}/tracks`);
        });

        it('should have correct text', () => {
            expect(link).toHaveTextContent(item.user.username);
        });
    });

    describe('title', () => {
        const title = getByTestId('cardBodyTitle');

        it('should have correct text', () => {
            expect(title).toHaveTextContent(item.title);
        });
    });
});