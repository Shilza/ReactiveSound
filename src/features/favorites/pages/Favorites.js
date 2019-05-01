import {CommonContent} from "../../common/";
import React, {useEffect} from "react";
import {SubHeader} from "../organisms";
import {Tracks} from "../templates";
import {connect} from "react-redux";
import {fetchFavoriteTracks} from "../actionCreators";

const Favorites = ({dispatch, tracks, loading, error}) => {
    useEffect(() => {
        dispatch(fetchFavoriteTracks());
    }, [dispatch]);

    return (
        <CommonContent>
            <SubHeader location='Featured Tracks'/>
            {
                error && <span>Error! Something went wrong</span>
            }
            <Tracks tracks={tracks} loading={loading}/>
        </CommonContent>
    );
};

export default connect(state => ({
    error: state.favorite.tracks.error,
    loading: state.favorite.tracks.loading,
    tracks: state.favorite.tracks.tracks,
}))(Favorites);
