import styles from './styles.module.scss';
import React from "react";
import {withLoader} from "../../../features/common/organisms";
import {WaveformCard} from '../../../ui/organisms';
import InfiniteScroll from 'react-infinite-scroller';

export const WaveformTracks = withLoader(({tracks, fetcher, hasMore}) => (
    <div className={styles.container}>
        <InfiniteScroll
            pageStart={0}
            loadMore={fetcher}
            hasMore={hasMore}
            loader={<div className="loader" key={0}>Loading ...</div>}
        >
            {
                tracks && tracks.map(item => <WaveformCard key={item.id} {...item}/>)
            }
        </InfiniteScroll>
    </div>
));