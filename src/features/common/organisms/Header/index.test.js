import React from 'react'
import {cleanup, fireEvent, render, waitForElement,} from 'react-testing-library';
import {Header} from "./index";
import {BrowserRouter} from "react-router-dom";
import 'jest-dom/extend-expect';
import searchBarStyles from '../SearchBar/styles.module.scss';

afterEach(cleanup);

describe('Test Header', () => {

    it('open-close search bar', async () => {

        const { getByTestId } = render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>);

        let searchButton = getByTestId('searchButton');
        fireEvent.click(searchButton);

        const searchBar = await waitForElement(() =>
            getByTestId('searchBar')
        );

        expect(searchBar).toHaveClass(searchBarStyles.searchBarAppear);

        fireEvent.click(searchButton);

        expect(searchBar).toHaveClass(searchBarStyles.searchBarLeave);
    });

});