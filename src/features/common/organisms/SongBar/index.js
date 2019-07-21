import styles from './styles.module.scss';
import React, {useEffect} from "react";
import {PlayerControls, PlayerVolume} from "../../molecules";
import {PlayerTime, TimeLine} from "../../atoms";
import {connect} from "react-redux";
import MediaQuery from "react-responsive";
import {pauseTrack, playTrack, seekTo} from "../../actionCreators";

const SongBar = ({player, title, currentTime, duration, currentTrackId, dispatch}) => {

    useEffect(() => {
        const onKeyDownListener = event => {
            const SEEK = 5000;
            switch (event.keyCode) {
                case 32: {
                    event.preventDefault();
                    player.isPlaying() ? dispatch(pauseTrack()) : dispatch(playTrack());
                    break;
                }
                case 37: {
                    const seekMs = currentTime > SEEK ? currentTime - SEEK : 0;
                    dispatch(seekTo(seekMs));
                    break;
                }
                case 39: {
                    const seekMs = duration - currentTime > SEEK ? currentTime + SEEK : currentTime;
                    dispatch(seekTo(seekMs));
                    break;
                }
                case 48: {
                    dispatch(seekTo(0));
                    break;
                }
                case 96: {
                    dispatch(seekTo(0));
                    break;
                }
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