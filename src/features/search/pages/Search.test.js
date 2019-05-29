import React from 'react';
import {render} from 'react-testing-library';
import {BrowserRouter as Router} from "react-router-dom";
import Search from "./Search";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {fetchSearchTracks} from "../actionCreators";
import {tracksApi} from "../../common/api";

jest.mock('../../common/api');

const resolvedValue = [
    {
        id: 500
    }
];
tracksApi.getTracks.mockResolvedValue(resolvedValue);

describe('<Search/> page', () => {

    const mockStore = configureStore();
    const store = mockStore({
        search: {
            error: false,
            loading: false,
            tracks: [],
            nextPage: undefined
        }
    });

    const query = 'Artist';
    const {container} = render(
        <Provider store={store}>
            <Router>
                <Search match={{params: {query}}}/>
            </Router>
        </Provider>
    );

    it('should load tracks', () => {
        expect(store.getActions()[0]).toEqual(fetchSearchTracks('Artist'));
    });
});