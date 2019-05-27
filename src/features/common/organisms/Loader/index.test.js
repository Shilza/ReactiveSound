import React from "react";
import {render} from 'react-testing-library';
import {Loader} from "./index";
import styles from './styles.module.scss';

describe('Test Loader', () => {
    const {container} = render(<Loader/>);
    const childNodes = container.firstChild.childNodes;

    it('should render correctly', () => {
        expect(container.firstChild).toMatchSnapshot();
    });

    it('should have three child', () => {
        expect(childNodes.length).toBe(3);
    });

    it('first child should have circle class', () => {
        expect(childNodes[0]).toHaveClass(styles.circle)
    });

    it('second child should have circle2 class', () => {
        expect(childNodes[1]).toHaveClass(styles.circle2)
    });

    it('third child should have circle3 class', () => {
        expect(childNodes[2]).toHaveClass(styles.circle3)
    });
});