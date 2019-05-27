import React from 'react';
import {render} from 'react-testing-library';
import {NoMatch} from "./NoMatch";
import {BrowserRouter as Router} from "react-router-dom";

describe('Test NoMatch', () => {

    const {container, getByTestId} = render(
        <Router>
            <NoMatch/>
        </Router>
    );

    it('should renders correctly', () => {
        expect(container.firstChild).toMatchSnapshot();
    });

    it('item link should be have path to home page', () => {
        expect(getByTestId('noMatchLinkToHome')).toHaveAttribute('href', '/');
    });
});