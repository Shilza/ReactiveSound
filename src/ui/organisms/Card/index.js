import React from "react";
import styles from './styles.module.scss';
import {CardBody} from "../CardBody";
import {Fade} from "react-reveal";

export const Card = React.memo(({item, currentTrackId}) => (
    <Fade bottom>
        <article className={styles.card}>
            <CardBody id={item.id}
                      title={item.title}
                      userId={item.user.id}
                      duration={item.duration}
                      cover={item.artwork_url}
                      username={item.user.username}
                      currentTrackId={currentTrackId}
                      link={item.user.permalink_url}
            />
        </article>
    </Fade>
));
