import React, {useCallback, useEffect} from "react";
import {CommonContent} from "../../common/templates";
import {SubHeader} from "../../favorites/organisms/SubHeader";
import {AdaptiveTracks} from "../../../ui/templates";
import {Stats} from "../organisms";
import {fetchUser} from "../actionCreators";

export const Page = ({nextPage, dispatch, id, loading, tracks, tracksFethcer, tracksFethcerByPage, user}) => {

    useEffect(() => {
        dispatch(fetchUser(id));
        dispatch(tracksFethcer(id));
    }, [id, tracksFethcer, dispatch]);

    const fetchNext = useCallback(() => {
        dispatch(tracksFethcerByPage(id));
    }, [id, tracksFethcerByPage, dispatch]);

    return (
        <CommonContent>
            <SubHeader location={user && user.username}>
                <Stats loading={true} user={user}/>
            </SubHeader>
            <AdaptiveTracks loading={loading}
                            hasMore={typeof nextPage === 'string'}
                            fetchNext={fetchNext}
                            tracks={tracks}
            />
        </CommonContent>
    );
};