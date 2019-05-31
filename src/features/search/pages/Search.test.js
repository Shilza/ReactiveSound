import React from 'react';
import {render} from 'react-testing-library';
import {BrowserRouter as Router} from "react-router-dom";
import Search from "./Search";
import {Provider} from "react-redux";
import {tracksApi} from "../../common/api";
import store from "../../../store";

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
tracksApi.getTracks.mockResolvedValue(resolvedValue);

describe('<Search/> page', () => {

    const query = 'Artist';
    const {queryByTestId} = render(
        <Provider store={store}>
            <Router>
                <Search match={{params: {query}}}/>
            </Router>
        </Provider>
    );

    it('should have three child', () => {
        const trackContainer = queryByTestId('tracksContainer');
        expect(trackContainer.childNodes.length).toBe(3);
    });
});