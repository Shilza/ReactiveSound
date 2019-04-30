import React from "react";
import styles from './styles.module.scss';
import {Card} from "../../../../ui/organisms";
import {CardBody} from "../../organisms";
import {connect} from "react-redux";

export const Tracks = ({tracks, currentTrackId}) => (
    <div className={styles.container}>
        {
            tracks && tracks.map(item => <Card key={item.id}>
                    <CardBody currentTrackId={currentTrackId} cover={item.artwork_url} username={item.user.permalink}
                              link={item.user.permalink_url} title={item.title} id={item.id} duration={item.duration}/>
                </Card>
            )
        }
    </div>
);

export default connect(state => ({
    tracks: state.favorite.tracks.tracks,
    currentTrackId: state.favorite.player.currentTrack && state.favorite.player.currentTrack.id
}))(Tracks);
