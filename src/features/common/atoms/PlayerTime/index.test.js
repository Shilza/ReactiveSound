import React from "react";
import {render} from 'react-testing-library';
import {PlayerTime} from './index';
import {convertMsToString} from "../../utils";

describe('<PlayerTime/> common atom', () => {
    it('should renders with the correct time', () => {
        const currentTime = 14012;
        const duration = 200123;

        const {getByTestId} = render(<PlayerTime currentTime={14012} duration={200123} />);

        expect(getByTestId('currentTime')).toHaveTextContent(convertMsToString(currentTime));
        expect(getByTestId('duration')).toHaveTextContent(convertMsToString(duration));
    })
});