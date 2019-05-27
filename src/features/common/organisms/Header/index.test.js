import React from 'react';
import {fireEvent, cleanup, render, waitForElement} from 'react-testing-library';
import {Header} from "./index";
import {BrowserRouter as Router} from "react-router-dom";
import searchBarStyles from '../SearchBar/styles.module.scss';

describe('Test Header', () => {

    afterEach(cleanup);

    it('open-close search bar', async () => {
        const {getByTestId} = render(
            <Router>
                <Header/>
            </Router>
        );

        let searchButton = getByTestId('searchButton');
        fireEvent.click(searchButton);

        const searchBar = await waitForElement(() =>
            getByTestId('searchBar')
        );

        expect(searchBar).toHaveClass(searchBarStyles.searchBarAppear);

        fireEvent.click(searchButton);

        expect(searchBar).toHaveClass(searchBarStyles.searchBarLeave);
    });


    it('should change location after submitting search value', async () => {
        const {getByTestId} = render(
            <Router>
                <Header/>
            </Router>
        );

        let searchButton = getByTestId('searchButton');
        fireEvent.click(searchButton);

        const searchBar = await waitForElement(() =>
            getByTestId('searchBar')
        );

        const searchInput = getByTestId('searchInput');
        const artist = 'Artist';
        fireEvent.change(searchInput, {
            target: {
                value: artist
            }
        });

        const searchForm = getByTestId('searchForm');

        expect(window.location.pathname).toBe('/');
        fireEvent.submit(searchForm);
        expect(window.location.pathname).toBe(`/search/${artist}`);
        expect(searchInput.value).toBe('');
        expect(searchBar).toHaveClass(searchBarStyles.searchBarLeave);
    });
});