import React from "react";
import {render} from 'react-testing-library';
import {CardActions} from "./index";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {convertMsToString} from "../../../features/common/utils";

describe('<CardActions/> molecule', () => {
    const mockStore = configureStore();
    const store = mockStore({});

    const linkPath = 'link';
    const duration = 220000;
    const {container, getByTestId, queryByTestId} = render(
        <Provider store={store}>
            <CardActions link={linkPath} duration={duration}/>
        </Provider>
    );
    const link = getByTestId('cardActionsLink');

    describe('link', () => {
        it('should have correct path', () => {
            expect(link).toHaveAttribute('href', linkPath);
        });

        it('should have correct target attribute', () => {
            expect(link).toHaveAttribute('target', '_blank');
        });

        it('should have correct rel attribute', () => {
            expect(link).toHaveAttribute('rel', 'noopener noreferrer');
        });
    });

    it('should have <PlayButton/>', () => {
        const playButton = queryByTestId('playButton');
        expect(container.firstChild).toContainElement(playButton);
    });

    it('should have correct duration', () => {
        const durationContainer = getByTestId('cardActionsDuration');
        expect(durationContainer).toHaveTextContent(convertMsToString(duration));
    });
});