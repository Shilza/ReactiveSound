import React from "react";
import styles from './styles.module.scss';
import {CardActions} from "../../molecules/";
import {TimeLine} from '../../../common/atoms'

export const CardBody = ({currentTrackId, src, id, link, username, title, cover, duration}) => (
    <>
        <div className={styles.imageContainer}>
            <img className={styles.cover} src={cover} alt='cover'/>
            {
                currentTrackId === id &&
                    <TimeLine/>
            }
        </div>
        <div className={styles.info}>
            <div className={styles.username}>
                <a href={'/'}>{username}</a>
            </div>
            <span className={styles.title}>{title}</span>
            <CardActions id={id} duration={duration} link={link} title={title}/>
        </div>
    </>
);