import React from "react";
import {connect} from "react-redux";
import {fetchUsersLikedTracks, requestLikedTracksByPage} from "../actionCreators";
import {Page} from "../templates";

const Liked = ({match: {params}, user, loading, tracksLoading, tracks, nextPage, dispatch}) => (
    <Page
        user={user}
        tracks={tracks}
        loading={tracksLoading}
        nextPage={nextPage}
        dispatch={dispatch}
        id={parseInt(params.id)}
        tracksFethcer={fetchUsersLikedTracks}
        tracksFethcerByPage={requestLikedTracksByPage}
    />
);

export default connect(state => ({
    user: state.user.user.data,
    loading: state.user.user.loading,
    tracks: state.user.likedTracks.data,
    tracksLoading: state.user.likedTracks.loading,
    nextPage: state.user.likedTracks.nextPage
}))(Liked);