import React from "react";
import styles from './styles.module.scss';
import {Icon} from "../../../../ui/atoms/Icon";
import {Button} from "../../../../ui/atoms";
import {fetchNext, fetchPrevious} from "../../actionCreators";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {PlayButton} from "../../atoms";

const PlayerControls = withRouter(({currentTrackId, trackIntervalId, location, dispatch}) => {

    const onNext = () => {
        // Pass a location prop that there was a selection from the appropriate storage
        dispatch(fetchNext(location.pathname));
    };

    const onPrevious = () => {
        dispatch(fetchPrevious(location.pathname));
    };

    return (
        <div className={styles.container}>
            <Button onClick={onPrevious} aria-label='Previous track'>
                <Icon name='previous' fill='#4d4e4f'/>
            </Button>
            <PlayButton id={currentTrackId}/>
            <Button onClick={onNext} aria-label='Next track'>
                <Icon name='next' fill='#4d4e4f'/>
            </Button>
        </div>
    );
});

export default connect(state => ({
    trackIntervalId: state.player.trackIntervalId
}))(PlayerControls);