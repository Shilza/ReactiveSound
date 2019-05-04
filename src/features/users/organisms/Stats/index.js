import React from "react";
import styles from './styles.module.scss';
import {StatUnit} from "../../molecules";
import {Link} from "react-router-dom";
import {withRouter} from "react-router";

export const Stats = React.memo(withRouter(({loading, user, location: {pathname}}) => (
    <div className={styles.container}>
        <StatUnit count={user && user.track_count} active={pathname.includes('tracks')}>
            <Link to={`/users/${user && user.id}/tracks`}>Tracks</Link>
        </StatUnit>
        <StatUnit count={user && user.public_favorites_count} active={pathname.includes('liked')}>
            <Link to={`/users/${user && user.id}/liked`}>Likes</Link>
        </StatUnit>
        <StatUnit count={user && user.followers_count}>
            <div>Followers</div>
        </StatUnit>
        <StatUnit count={user && user.followings_count}>
            <div>Followings</div>
        </StatUnit>
    </div>
)));