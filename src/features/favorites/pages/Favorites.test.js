import React from "react";
import {render} from 'react-testing-library';
import {Provider} from "react-redux";
import Favorites from "./Favorites";
import store from "../../../store";
import {tracksApi} from "../../common/api";
import {BrowserRouter as Router} from "react-router-dom";

jest.mock('../../common/api');

const resolvedValue = {
    collection: [
        {
            id: 1,
            title: 'title',
            duration: 220000,
            cover: 'artwork_url',
            user: {
                id: 5,
                username: 'Username',
                permalink_url: 'permalink_url'
            }
        },
        {
            id: 2,
            title: 'title',
            duration: 220000,
            cover: 'artwork_url',
            user: {
                id: 5,
                username: 'Username',
                permalink_url: 'permalink_url'
            }
        },
        {
            id: 3,
            title: 'title',
            duration: 220000,
            cover: 'artwork_url',
            user: {
                id: 5,
                username: 'Username',
                permalink_url: 'permalink_url'
            }
        }
    ],
    next_href: undefined
};

tracksApi.getFavorites.mockResolvedValue(resolvedValue);


describe('<Favorites> page', () => {

    const {getByTestId} = render(
        <Provider store={store}>
            <Router>
                <Favorites/>
            </Router>
        </Provider>
    );

    it('should have three child', () => {
        const tracksContainer = getByTestId('tracksContainer');
        expect(tracksContainer.childNodes.length).toBe(3);
    });
});