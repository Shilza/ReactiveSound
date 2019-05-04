import React, {useEffect} from "react";
import styles from './styles.module.scss';
import {TrackCard} from "../../../features/search/molecules/index";
import {fetchWaveform} from "../../../features/search/actionCreators/index";
import {connect} from "react-redux";

const WaveformCard = ({id, dispatch, title, user, artwork_url, duration, likes_count, playback_count, waveform}) => {

    useEffect(() => {
        dispatch(fetchWaveform(id));
    }, [id, dispatch]);

    return (
        <article className={styles.container}>
            <div className={styles.coverContainer}>
                <img className={styles.cover} alt='cover'
                     src={artwork_url}/>
            </div>
            <TrackCard username={user.username}
                       id={id}
                       userId={user.id}
                       playbackCount={playback_count}
                       link={user.permalink_url} title={title} duration={duration} likesCount={likes_count}
                       waveform={waveform}/>
        </article>
    );
};

export default connect()(WaveformCard);