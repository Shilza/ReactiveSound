import React from "react";
import {connect} from "react-redux";
import {fetchUsersLikedTracks, requestLikedTracksByPage} from "../actionCreators";
import {Page} from "../templates";

const Liked = ({match: {params}, user, tracksError, tracksLoading, tracks, nextPage, dispatch}) => (
    <Page
        user={user}
        tracks={tracks}
        tracksLoading={tracksLoading}
        error={tracksError}
        nextPage={nextPage}
        dispatch={dispatch}
        id={parseInt(params.id)}
        tracksFethcer={fetchUsersLikedTracks}
        tracksFethcerByPage={requestLikedTracksByPage}
    />
);

export default connect(state => ({
    user: state.user.user.data,
    tracks: state.user.likedTracks.data,
    tracksLoading: state.user.likedTracks.loading,
    trackError: state.user.likedTracks.error,
    nextPage: state.user.likedTracks.nextPage
}))(Liked);