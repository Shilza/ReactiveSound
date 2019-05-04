import React, {useEffect} from "react";
import {CommonContent} from "../../common/templates/";
import {SubHeader} from "../../favorites/organisms/";
import {connect} from "react-redux";
import {fetchUser} from "../actionCreators/";
import {Stats} from "../organisms";
import MediaQuery from "react-responsive";
import {Tracks} from "../../favorites/templates/";
import {fetchUsersLikedTracks} from "../actionCreators";
import {WaveformTracks} from "../../../ui/templates";

const Liked = ({match: {params}, user, loading, tracks, tracksLoading, dispatch}) => {
    useEffect(() => {
        if ((user && user.id) !== parseInt(params.id))
            dispatch(fetchUser(parseInt(params.id)));
    }, [params, user, dispatch]);

    useEffect(() => {
        dispatch(fetchUsersLikedTracks(parseInt(params.id)));
    }, [params, user, dispatch]);

    return (
        <CommonContent>
            <SubHeader location={user && user.username}>
                <Stats loading={loading} user={user}/>
            </SubHeader>
            <MediaQuery minWidth={960}>
                {(matches) => {
                    if (matches) {
                        return <WaveformTracks  tracks={tracks} loading={tracksLoading}/>
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
    tracks: state.user.likedTracks.data,
    tracksLoading: state.user.likedTracks.loading,
}))(Liked);