import React from "react";
import {connect} from "react-redux";
import {fetchUsersTracks} from "../actionCreators/";
import {Page} from "../templates";
import {requestUsersTracksByPage} from "../actionCreators";

const User = ({match: {params}, user, userLoading, tracksError, tracksLoading, tracks, nextPage, dispatch}) => (
    <Page
        user={user}
        tracks={tracks}
        tracksLoading={tracksLoading}
        userLoading={userLoading}
        error={tracksError}
        nextPage={nextPage}
        dispatch={dispatch}
        id={parseInt(params.id)}
        tracksFethcer={fetchUsersTracks}
        tracksFethcerByPage={requestUsersTracksByPage}
    />
);

export default connect(state => ({
    user: state.user.user.data,
    userLoading: state.user.user.loading,
    tracks: state.user.tracks.data,
    tracksLoading: state.user.tracks.loading,
    tracksError: state.user.tracks.error,
    nextPage: state.user.tracks.nextPage,
}))(User);