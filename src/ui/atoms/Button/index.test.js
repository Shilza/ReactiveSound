import React from "react";
import {render} from 'react-testing-library';
import {Button} from "./index";

describe('<Button/> atom', () => {
    const children = <div data-testid='buttonsChildren'>Children</div>;
    const {container, queryByTestId} = render(
        <Button disabled>
            {children}
        </Button>
    );

    it('should have child', () => {
        const buttonsChildren = queryByTestId('buttonsChildren');
        expect(container).toContainElement(buttonsChildren);
    });

    it('should have passed prop', () => {
        expect(container.firstChild).toHaveAttribute('disabled');
    });
});