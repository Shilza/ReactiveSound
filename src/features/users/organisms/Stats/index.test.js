import React from 'react';
import {cleanup, render} from 'react-testing-library';
import {Stats} from "./index";
import {BrowserRouter as Router} from "react-router-dom";

describe('<Stats/> users feature organism', () => {
    const user = {
        id: 5
    };
    const loading = false;
    const location = {
        pathname: 'tracks'
    };
    const {container, getByTestId} = render(
        <Router>
            <Stats
                user={user}
                loading={loading}
                location={location}
            />
        </Router>
    );

    it('should have child', () => {
        expect(container.firstChild.childNodes.length).toBeGreaterThanOrEqual(1);
    });

    it('should have correct user tracks link', () => {
        expect(getByTestId('userTracksLink')).toHaveAttribute('href', `/users/${user?.id}/tracks`);
    });

    it('should have correct user\'s likes tracks link', () => {
        expect(getByTestId('userLikedTracksLink')).toHaveAttribute('href', `/users/${user?.id}/liked`);
    });

    it('should not have child', () => {
        cleanup();

        const loading = true;
        const {container} = render(
            <Router>
                <Stats
                    user={user}
                    loading={loading}
                    location={location}
                />
            </Router>
        );

        expect(container.firstChild.childNodes.length).toBe(0);
    });
});