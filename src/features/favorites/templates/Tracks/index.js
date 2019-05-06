import React from "react";
import styles from './styles.module.scss';
import {Card} from "../../../../ui/organisms";
import {CardBody} from "../../organisms";
import {connect} from "react-redux";
import {withPagination} from "../../../common/atoms";

export const Tracks = withPagination(({tracks, currentTrackId}) => (
    <div className={styles.container}>
        {
            tracks && tracks.map(item => <Card key={item.id}>
                    <CardBody id={item.id}
                              title={item.title}
                              userId={item.user.id}
                              duration={item.duration}
                              cover={item.artwork_url}
                              username={item.user.username}
                              currentTrackId={currentTrackId}
                              link={item.user.permalink_url}
                    />
                </Card>
            )
        }
    </div>
));

export default connect(state => ({
    currentTrackId: state.player.currentTrack && state.player.currentTrack.id
}))(Tracks);

