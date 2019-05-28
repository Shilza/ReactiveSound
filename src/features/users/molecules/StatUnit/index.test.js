import React from 'react';
import {cleanup, render} from 'react-testing-library';
import {StatUnit} from "./index";
import styles from './styles.module.scss';

describe('<StatUnit/>', (() => {
    const count = 500;
    const active = true;
    const Children = <div data-testid='statUnitChildren'>Children</div>;
    const {container, queryByTestId} = render(
        <StatUnit count={count} active={active}>
            {Children}
        </StatUnit>
    );

    it('should renders correctly', () => {
        expect(container.firstChild).toMatchSnapshot();
    });

    it('should have active class', () => {
        const children = queryByTestId('statUnitChildren');
        expect(children).toHaveAttribute('class', styles.labelActive);
    });

    it('should have label class', () => {
        cleanup();
        const {queryByTestId} = render(
            <StatUnit count={count} active={false}>
                {Children}
            </StatUnit>
        );

        const children = queryByTestId('statUnitChildren');
        expect(children).toHaveAttribute('class', styles.label);
    });
}));

