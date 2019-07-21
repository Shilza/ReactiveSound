import React from "react";
import SongBar from './index';
import {Provider} from "react-redux";
import {fireEvent, render} from 'react-testing-library';
import configureStore from "redux-mock-store";
import {seek} from "../../middlewares";
import {SET_CURRENT_TIME} from "../../actionTypes";
import {BrowserRouter as Router} from "react-router-dom";
import {setCurrentTime} from "../../actionCreators";

const duration = 220000;
const initialState = {
    player: {
        currentTime: 0,
        currentTrack: {
            duration,
            id: 5
        },
        player: {
            _currentTime: 0,
            seek: function (ms) {
                this._currentTime = ms;
            },
            currentTime: function () {
                return this._currentTime;
            }
        }
    }
};

const mockStore = configureStore([seek]);

describe('<SongBar/> common organism', () => {

    const store = mockStore(() => {
        const actions = store.getActions();
        const lastAction = actions[actions.length - 1];
        if (lastAction?.type === SET_CURRENT_TIME) {
            return {
                player: {...initialState.player, currentTime: lastAction.payload}
            };
        }
        return initialState;
    });

    const {container, queryByTestId} = render(
        <Provider store={store}>
            <Router>
                <SongBar/>
            </Router>
        </Provider>
    );

    const SEEK = 5000;
    const width = 1000;
    const timeLine = queryByTestId('timeLine');
    timeLine.style.width = width;

    it('should seek by 5 second by ArrowRight key down', () => {
        const currentTimeLinePosition = queryByTestId('currentTimeLinePosition');
        const percents = `${SEEK / duration * 100}%`;

        fireEvent.keyDown(container, {
            keyCode: 39
        });
        store.dispatch(setCurrentTime(store.getState().player.player.currentTime()));

        expect(currentTimeLinePosition).toHaveStyle(`width: ${percents}`);
    });

    it('should seek by 5 second by ArrowLeft key down', () => {
        const currentTimeLinePosition = queryByTestId('currentTimeLinePosition');
        const currentTime = duration / 100 * 90;
        store.dispatch(setCurrentTime(currentTime));
        const percents = `${(currentTime - SEEK) / duration * 100}%`;

        fireEvent.keyDown(container, {
            keyCode: 37
        });
        store.dispatch(setCurrentTime(store.getState().player.player.currentTime()));

        expect(currentTimeLinePosition).toHaveStyle(`width: ${percents}`);
    });

    it('should seek by 0 second by 0 key down (48)', () => {
        const currentTimeLinePosition = queryByTestId('currentTimeLinePosition');
        currentTimeLinePosition.style.width = '90%';

        fireEvent.keyDown(container, {
            keyCode: 48
        });
        store.dispatch(setCurrentTime(store.getState().player.player.currentTime()));

        expect(currentTimeLinePosition).toHaveStyle('width: 0%');
    });
});