import React, {useCallback, useEffect} from "react";
import {CommonContent} from "../../common/";
import {SubHeader} from "../organisms";
import {Tracks} from "../templates";
import {connect} from "react-redux";
import {fetchFavoriteTracks, fetchFavoriteTracksByPage} from "../actionCreators";
import {Loader} from "../../common/organisms";

const Favorites = ({dispatch, tracks, loading, nextPage}) => {
    useEffect(() => {
        if (tracks.length === 0)
            dispatch(fetchFavoriteTracks());
    }, [dispatch, tracks]);

    const fetchNext = useCallback(() => {
        dispatch(fetchFavoriteTracksByPage());
    }, [dispatch]);

    return (
        <CommonContent>
            <SubHeader section='Spotlight' location='Featured Tracks'/>
            {
                loading
                    ? <Loader/>
                    : <Tracks hasMore={typeof nextPage === 'string'} fetchNext={fetchNext} tracks={tracks}/>
            }
        </CommonContent>
    );
};

export default connect(state => ({
    error: state.favorite.tracks.error,
    tracks: state.favorite.tracks.tracks,
    nextPage: state.favorite.tracks.nextPage,
    loading: state.favorite.tracks.loading
}))(Favorites);
