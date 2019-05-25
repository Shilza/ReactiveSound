import React from 'react';
import {render} from 'react-testing-library';
import {SubHeader} from "./index";

describe('Test SubHeader', () => {

    it('should change location after submitting search value', () => {

        const location = 'Favorite';
        const children = <div data-testid='subHeaderChildren'>Children</div>;

        const {container, getByTestId, queryByTestId} = render(
            <SubHeader section={<div>Section</div>} location={location}>
                {children}
            </SubHeader>
        );

        const title = getByTestId('subHeaderTitle');
        let section = queryByTestId('subHeaderSection');
        const subHeaderChildren = queryByTestId('subHeaderChildren');

        expect(section).not.toBeEmpty();
        expect(container).toContainElement(subHeaderChildren);
        expect(title).toHaveTextContent(location);
    });
});