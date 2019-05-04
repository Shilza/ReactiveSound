import React from "react";
import styles from './styles.module.scss';
import {Card} from "../../../../ui/organisms";
import {CardBody} from "../../organisms";
import {connect} from "react-redux";
import {withLoader} from "../../../common/organisms";

export const Tracks = withLoader(({tracks, currentTrackId}) => (
    <div className={styles.container}>
        {
            tracks && tracks.map(item => <Card key={item.id}>
                    <CardBody currentTrackId={currentTrackId} cover={item.artwork_url} username={item.user.username}
                              link={item.user.permalink_url} userId={item.user.id} title={item.title} id={item.id} duration={item.duration}/>
                </Card>
            )
        }
    </div>
));

export default connect(state => ({
    currentTrackId: state.player.currentTrack && state.player.currentTrack.id
}))(Tracks);

