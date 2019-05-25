import React from "react";
import MediaQuery from "react-responsive";
import {WaveformTracks} from "./WaveformTracks";
import {Tracks} from './index';

export const AdaptiveTracks = React.memo(({tracks, hasMore, fetchNext}) => (
        <MediaQuery minWidth={1000}>
            {(matches) =>
                matches
                    ? <WaveformTracks hasMore={hasMore} fetchNext={fetchNext} tracks={tracks}/>
                    : <Tracks hasMore={hasMore} fetchNext={fetchNext} tracks={tracks}/>
            }
        </MediaQuery>
    )
);