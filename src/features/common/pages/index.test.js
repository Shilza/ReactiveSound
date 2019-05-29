import React from 'react';
import {render} from 'react-testing-library';
import {NoMatch} from "./NoMatch";
import {BrowserRouter as Router} from "react-router-dom";

describe('<NoMatch/> common page', () => {

    const {getByTestId} = render(
        <Router>
            <NoMatch/>
        </Router>
    );

    it('item link should be have path to home page', () => {
        expect(getByTestId('noMatchLinkToHome')).toHaveAttribute('href', '/');
    });
});