import React from "react";
import MediaQuery from "react-responsive";
import {WaveformTracks} from "./WaveformTracks";
import {Tracks} from "../../features/favorites/templates";
import {withLoader} from "../../features/common/organisms/withLoader";

export const AdaptiveTracks = withLoader(({tracks, hasMore, fetchNext}) => (
    <MediaQuery minWidth={960}>
        {(matches) =>
            matches
                ? <WaveformTracks hasMore={hasMore} fetchNext={fetchNext} tracks={tracks}/>
                : <Tracks hasMore={hasMore} fetchNext={fetchNext} tracks={tracks}/>
        }
    </MediaQuery>
));