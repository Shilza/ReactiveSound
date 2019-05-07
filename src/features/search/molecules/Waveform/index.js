import styles from './styles.module.scss';
import React, {useEffect, useRef} from "react";
import {withLoader} from "../../../common/organisms";
import {withTimeLine} from "../../../common/atoms";

export const Waveform = ({id, waveform}) => {

    let canvasRef = useRef();

    useEffect(() => {
        if (!Object.is(waveform, undefined)) {
            let canvas = canvasRef.current;
            canvas.height = waveform.height / 2;
            canvas.width = waveform.width / 2;

            let context = canvas.getContext('2d');
            context.fillStyle = '#1d1e1f';

            let samples = waveform.samples,
                l = samples.length,
                i = 0,
                x = 0,
                v;

            for (; i < l; i += 2, x++) {
                v = samples[i] / 4;
                context.fillRect(x, 0, 1, 35 - v);
                context.fillRect(x, 35 + v, 1, 70);
            }
        }
    }, [waveform]);

    return (
        <div className={styles.container}>
            <Body loading={!waveform} id={id} canvasRef={canvasRef}/>
        </div>
    );
};

const Body = withLoader(withTimeLine(({canvasRef, currentTimeLinePosition}) => (
    <div className={styles.timeLineContainer}>
        <div className={styles.timeLine} style={{width: currentTimeLinePosition}}/>
        <canvas ref={canvasRef}/>
    </div>
)));
