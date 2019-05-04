import React, {useEffect} from "react";
import {CommonContent} from "../../common/templates/";
import {SubHeader} from "../../favorites/organisms/";
import {connect} from "react-redux";
import {fetchUser, fetchUsersTracks} from "../actionCreators/";
import {Stats} from "../organisms";
import MediaQuery from "react-responsive";
import {Tracks} from "../../favorites/templates/";
import {WaveformTracks} from "../../../ui/templates";

const User = ({match: {params}, user, loading, tracks, tracksLoading, nextPage, dispatch}) => {
    useEffect(() => {
        if ((user && user.id) !== parseInt(params.id))
            dispatch(fetchUser(parseInt(params.id)));
    }, [params, user, dispatch]);

    const fetchNext = () => {
        console.log(fetch);
        dispatch(fetchUsersTracks(parseInt(params.id)));
    };

    console.log(!!nextPage);
    return (
        <CommonContent>
            <SubHeader location={user && user.username}>
                <Stats loading={loading} user={user}/>
            </SubHeader>
            <MediaQuery minWidth={960}>
                {(matches) => {
                    if (matches) {
                        return <WaveformTracks fetcher={fetchNext} hasMore={!!nextPage} tracks={tracks} loading={tracksLoading}/>
                    } else {
                        return <Tracks tracks={tracks} loading={tracksLoading}/>;
                    }
                }}
            </MediaQuery>
        </CommonContent>
    );
};

export default connect(state => ({
    user: state.user.user.data,
    loading: state.user.user.loading,
    tracks: state.user.tracks.data,
    tracksLoading: state.user.tracks.loading,
    nextPage: state.user.tracks.nextPage,
}))(User);