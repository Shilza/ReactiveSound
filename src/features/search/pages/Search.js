import React, {useEffect} from "react";
import {CommonContent} from "../../common/templates";
import {SubHeader} from "../../favorites/organisms";
import {connect} from "react-redux";
import {fetchSearchTracks} from "../actionCreators";
import {Tracks} from "../../favorites/templates/Tracks";

const Search = ({match: {params}, dispatch, loading, tracks}) => {

    useEffect(() => {
        dispatch(fetchSearchTracks(params.query))
    }, [params, dispatch]);

    return (
        <CommonContent>
            <SubHeader location={params.query}/>
            <Tracks tracks={tracks} loading={loading}/>
        </CommonContent>
    );
};

export default connect(state => ({
    error: state.search.search.error,
    loading: state.search.search.loading,
    tracks: state.search.search.tracks
}))(Search);