import React from "react";
import styles from './styles.module.scss';
import {CardActions} from "../../molecules";
import {TimeLine} from '../../../common/atoms'
import {Link} from "react-router-dom";

export const CardBody = ({currentTrackId,userId,  src, id, link, username, title, cover, duration}) => (
    <>
        <div className={styles.imageContainer}>
            <img className={styles.cover} src={cover} alt='cover'/>
            { currentTrackId === id && <TimeLine id={id}/> }
        </div>
        <div className={styles.info}>
            <Link to={`/users/${userId}/tracks`} className={styles.username}>{username}</Link>
            <span className={styles.title}>{title}</span>
            <CardActions id={id} duration={duration} link={link} title={title}/>
        </div>
    </>
);