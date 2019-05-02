import React, {useEffect} from "react";
import styles from './styles.module.scss';
import {TrackCard} from "../../molecules";
import {fetchWaveform} from "../../actionCreators";

export const WaveformCard = ({id, title, user, dispatch, artwork_url, duration, likes_count, playback_count, waveform}) => {
    useEffect(() => {
        dispatch(fetchWaveform(id))
    }, [id, dispatch]);

    return (
        <article className={styles.container}>
            <img className={styles.cover} alt='cover'
                 src={artwork_url}/>
            <TrackCard username={user.username}
                       id={id}
                       userId={user.id}
                       playbackCount={playback_count}
                       link={user.permalink_url} title={title} duration={duration} likesCount={likes_count} waveform={waveform}/>
        </article>
    );
};