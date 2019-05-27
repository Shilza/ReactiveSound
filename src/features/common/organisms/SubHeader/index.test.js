import React from 'react';
import {render} from 'react-testing-library';
import {SubHeader} from "./index";

describe('Test SubHeader', () => {
    const location = 'Favorite';
    const children = <div data-testid='subHeaderChildren'>Children</div>;

    const {container, getByTestId, queryByTestId} = render(
        <SubHeader section={<div>Section</div>} location={location}>
            {children}
        </SubHeader>
    );

    it('should renders correctly', () => {
        expect(container.firstChild).toMatchSnapshot();
    });

    it('title should have correct text', () => {
        const title = getByTestId('subHeaderTitle');
        expect(title).toHaveTextContent(location);
    });

    it('section should have two child', () => {
        let section = queryByTestId('subHeaderSection');
        expect(section.childNodes.length).toBe(2);
    });

    it('should have passed child', () => {
        const subHeaderChildren = queryByTestId('subHeaderChildren');
        expect(container).toContainElement(subHeaderChildren);
    });
});