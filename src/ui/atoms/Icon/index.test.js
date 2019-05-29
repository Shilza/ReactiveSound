import React from "react";
import {render} from 'react-testing-library';
import {Icon} from "./index";

describe('<Icon/> atom', () => {
    const name = 'soundcloud';
    const {getByTestId} = render(
        <Icon name={name}/>
    );

    it('should have correct icon', () => {
        const svg = getByTestId('iconSvgContainer');
        expect(svg.childNodes.length).toBe(1);
    });
});