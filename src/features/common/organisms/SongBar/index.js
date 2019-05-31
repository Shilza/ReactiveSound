import styles from './styles.module.scss';
import React, {useEffect} from "react";
import {PlayerControls, PlayerVolume} from "../../molecules";
import {PlayerTime, TimeLine} from "../../atoms";
import {connect} from "react-redux";
import MediaQuery from "react-responsive";
import {seekTo} from "../../actionCreators";

const SongBar = ({player, title, currentTime, duration, currentTrackId, dispatch}) => {

    useEffect(() => {
        const onKeyDownListener = ({key}) => {
            const SEEK = 5000;
            switch (key) {
                case 'ArrowLeft': {
                    const seekMs = currentTime > SEEK ? currentTime - SEEK : 0;
                    dispatch(seekTo(seekMs));
                    break;
                }
                case 'ArrowRight': {
                    const seekMs = duration - currentTime > SEEK ? currentTime + SEEK : currentTime;
                    dispatch(seekTo(seekMs));
                    break;
                }
                case '0':
                    dispatch(seekTo(0));
                    break;
                default:
            }
        };

        if (!Object.is(player, undefined)) {
            document.addEventListener('keydown', onKeyDownListener);

            return () => {
                document.removeEventListener('keydown', onKeyDownListener)
            }
        }
    }, [player, duration, currentTime, dispatch]);

    return (
        <>
            {
                player &&
                <div className={styles.songBar}>
                    <TimeLine id={currentTrackId}/>
                    <div className={styles.container}>
                        <div className={styles.subContainer}>
                            <PlayerControls currentTrackId={currentTrackId}/>
                            <MediaQuery minWidth={768}>
                                <PlayerTime
                                    currentTime={currentTime}
                                    duration={duration}
                                />
                            </MediaQuery>
                            <span title={title} className={styles.title}>{title}</span>
                        </div>
                        <MediaQuery minWidth={768}>
                            <PlayerVolume player={player}/>
                        </MediaQuery>
                    </div>
                </div>
            }
        </>
    );
};

export default connect(state => ({
    player: state.player?.player,
    title: state.player?.currentTrack?.title,
    currentTrackId: state.player?.currentTrack?.id,
    currentTime: state.player?.currentTime,
    duration: state.player?.currentTrack?.duration
}))(SongBar);