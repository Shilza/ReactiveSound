import React, {useCallback, useEffect} from "react";
import {CommonContent} from "../../common/templates";
import {AdaptiveTracks} from "../../../ui/templates";
import {Stats} from "../organisms";
import {fetchUser} from "../actionCreators";

export const Page = ({nextPage, dispatch, id, userLoading, tracksLoading, error, tracks, tracksFethcer, tracksFethcerByPage, user}) => {

    useEffect(() => {
        dispatch(fetchUser(id));
        dispatch(tracksFethcer(id));
    }, [id, tracksFethcer, dispatch]);

    const fetchNext = useCallback(() => {
        dispatch(tracksFethcerByPage(id));
    }, [id, tracksFethcerByPage, dispatch]);

    return (
        <CommonContent
            location={user && user.username}
            subHeaderChild={<Stats loading={userLoading} user={user}/>}
            loading={tracksLoading}
            error={error}
        >
            <AdaptiveTracks
                            hasMore={typeof nextPage === 'string'}
                            fetchNext={fetchNext}
                            tracks={tracks}
            />
        </CommonContent>
    );
};