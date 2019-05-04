import MediaQuery from "react-responsive";
import {connect} from "react-redux";
import React, {useEffect} from "react";
import {CommonContent} from "../../common/templates";
import {SubHeader} from "../../favorites/organisms";
import {fetchSearchTracks} from "../actionCreators";
import {Tracks} from "../../favorites/templates/Tracks";
import {WaveformTracks} from "../../../ui/templates";

const Search = ({match: {params}, dispatch, loading, tracks}) => {

    useEffect(() => {
        dispatch(fetchSearchTracks(params.query))
    }, [params, dispatch]);

    return (
        <CommonContent>
            <SubHeader section='Search Results' location={params.query}/>
            <MediaQuery minWidth={960}>
                {(matches) => {
                    if (matches) {
                        return <WaveformTracks tracks={tracks} loading={loading}/>
                    } else {
                        return <Tracks tracks={tracks} loading={loading}/>;
                    }
                }}
            </MediaQuery>
        </CommonContent>
    );
};

export default connect(state => ({
    error: state.search.search.error,
    loading: state.search.search.loading,
    tracks: state.search.search.tracks
}))(Search);