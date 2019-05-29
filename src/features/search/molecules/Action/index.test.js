import React from "react";
import {render} from 'react-testing-library';
import {Action} from "./index";

describe('<Action/> search feature molecule', () => {
    afterEach(() => {});

    const labelText = 'label';
    const {container, getByTestId} = render(
        <Action label={labelText}>
            <div>Children</div>
        </Action>
    );

    it('should have two child', () => {
        expect(container.firstChild.childNodes.length).toBe(2);
    });

    it('should have correct label', () => {
        expect(getByTestId('actionLabel')).toHaveTextContent(labelText);
    });
});