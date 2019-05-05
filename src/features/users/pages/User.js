import React from "react";
import {connect} from "react-redux";
import {fetchUsersTracks} from "../actionCreators/";
import {Page} from "../templates";
import {requestUsersTracksByPage} from "../actionCreators";

const User = ({match: {params}, user, loading, tracksLoading, tracks, nextPage, dispatch}) => (
    <Page
        user={user}
        tracks={tracks}
        loading={tracksLoading}
        nextPage={nextPage}
        dispatch={dispatch}
        id={parseInt(params.id)}
        tracksFethcer={fetchUsersTracks}
        tracksFethcerByPage={requestUsersTracksByPage}
    />
);

export default connect(state => ({
    user: state.user.user.data,
    loading: state.user.user.loading,
    tracks: state.user.tracks.data,
    tracksLoading: state.user.tracks.loading,
    nextPage: state.user.tracks.nextPage,
}))(User);