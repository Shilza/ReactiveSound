import React, {useEffect} from "react";
import styles from './styles.module.scss';
import {TrackCard} from "../../../features/search/organisms";
import {connect} from "react-redux";
import {fetchWaveform} from "../../../features/common/actionCreators";
import AOS from "aos";

const WaveformCard = ({id, title, user, artwork_url, duration, likes_count, playback_count, waveform, dispatch}) => {

    useEffect(() => {
        AOS.init({
            duration: 1000
        })
    });

    useEffect(() => {
        // If waveform has not loaded yet
        if (Object.is(waveform, undefined))
            dispatch(fetchWaveform(id)); // Load waveform
    }, [id, waveform, dispatch]);

    return (
        <article className={styles.container} data-aos='fade-up'>
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