import React from "react";
import styles from './styles.module.scss';
import {Card} from "../../organisms/index";
import {connect} from "react-redux";
import {withPagination} from "../../../features/common/atoms/index";

const Tracks = withPagination(({tracks, currentTrackId}) => (
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

