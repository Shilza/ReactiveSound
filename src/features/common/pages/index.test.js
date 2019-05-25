import React from 'react';
import {render} from 'react-testing-library';
import {NoMatch} from "./NoMatch";
import {BrowserRouter as Router} from "react-router-dom";

describe('Test NoMatch', () => {

    it('should render NoMatch page', () => {

        const {container} = render(
            <Router>
                <NoMatch/>
            </Router>
        );
        expect(container).toMatchSnapshot();
    });
});