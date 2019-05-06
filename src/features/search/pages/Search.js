import {connect} from "react-redux";
import React, {useCallback, useEffect} from "react";
import {CommonContent} from "../../common/templates";
import {SubHeader} from "../../favorites/organisms";
import {fetchSearchTracks, fetchSearchTracksByPage} from "../actionCreators";
import {AdaptiveTracks} from "../../../ui/templates";

const Search = ({match: {params}, dispatch, loading, nextPage, tracks}) => {

    useEffect(() => {
        dispatch(fetchSearchTracks(params.query))
    }, [params, dispatch]);

    const fetchNext = useCallback(() => {
        dispatch(fetchSearchTracksByPage());
    }, [dispatch]);

    return (
        <CommonContent>
            <SubHeader section='Search Results' location={params.query}/>
            <AdaptiveTracks loading={loading}
                            fetchNext={fetchNext}
                            hasMore={typeof nextPage === 'string'}
                            tracks={tracks}
            />
        </CommonContent>
    );
};

export default connect(state => ({
    error: state.search.error,
    loading: state.search.loading,
    tracks: state.search.tracks,
    nextPage: state.search.nextPage
}))(Search);