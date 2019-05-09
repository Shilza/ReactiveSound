import React from "react";
import styles from './styles.module.scss';
import {Card} from "../../../../ui/organisms";
import {connect} from "react-redux";
import {withPagination} from "../../../common/atoms";

export const Tracks = withPagination(({tracks, currentTrackId}) => (
        <div className={styles.container}>
            {
                tracks && tracks.map(item => <Card key={item.id} currentTrackId={currentTrackId} item={item}/>)
            }
        </div>
    )
);

export default connect(state => ({
    currentTrackId: state.player.currentTrack && state.player.currentTrack.id
}))(Tracks);

