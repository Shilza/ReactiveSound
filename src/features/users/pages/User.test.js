import React from 'react';
import {render} from 'react-testing-library';
import {BrowserRouter as Router} from "react-router-dom";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {fetchUser, fetchUsersTracks} from "../actionCreators";
import User from "./User";

describe('<Stats/>', () => {
    const mockStore = configureStore();
    const store = mockStore({
        user: {
            user: {
                loading: false,
                data: []
            },
            tracks: {
                loading: false,
                error: false,
                data: [],
                nextPage: undefined
            }
        }
    });
    const id = 5;

    const {container} = render(
        <Provider store={store}>
            <Router>
                <User match={{params: {id: id.toString()}}} />
            </Router>
        </Provider>
    );

    it('should renders correctly', () => {
        expect(container.firstChild).toMatchSnapshot();
    });

    it('should fetch user with passed id', () => {
        expect(store.getActions()[0]).toEqual(fetchUser(id));
    });

    it('should fetch users liked tracks with passed id', () => {
        expect(store.getActions()[1]).toEqual(fetchUsersTracks(id));
    });
});