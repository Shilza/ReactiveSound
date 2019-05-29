import React from 'react';
import {fireEvent, render} from 'react-testing-library';
import {TimeLine} from "./index";
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';
import {seek} from "../../middlewares";
import {seekTo, setCurrentTime} from "../../actionCreators";
import {SET_CURRENT_TIME} from "../../actionTypes";

const trackId = 5;
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
            seek: function(ms) {
                this._currentTime = ms;
            },
            currentTime: function() {
                return this._currentTime;
            }
        }
    }
};

const mockStore = configureStore([seek]);

describe('<TimeLine/> common atom', () => {

    const store = mockStore(() => {
        const actions = store.getActions();
        const lastAction = actions[actions.length - 1];
        if (lastAction?.type === SET_CURRENT_TIME) {
            return {
                player: { ...initialState.player, currentTime: lastAction.payload}
            };
        }
        return initialState;
    });

    it('current time should change for the click position as a percentage', () => {

        const {getByTestId} = render(
            <Provider store={store}>
                <TimeLine id={trackId}/>
            </Provider>
        );

        const event = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        });

        const offsetX = 200;
        const width = '1000px';
        Object.defineProperty(event, 'offsetX', {get: () => offsetX});

        const timeLine = getByTestId('timeLine');
        timeLine.style.width = width;

        fireEvent(timeLine, event);

        let percents = offsetX / parseInt(width) * 100;
        let seekMs = duration / 100 * percents;
        expect(store.getActions()[0]).toEqual(seekTo(seekMs));

        const currentTime = store.getState().player.player.currentTime();
        store.dispatch(setCurrentTime(currentTime));
        expect(store.getActions()[1]).toEqual(setCurrentTime(currentTime));

        expect(getByTestId('currentTimeLinePosition')).toHaveStyle(`width: ${percents}`);
    });
});
