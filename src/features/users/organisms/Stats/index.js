import React from "react";
import styles from './styles.module.scss';
import {StatUnit} from "../../molecules";
import {Link} from "react-router-dom";
import {withRouter} from "react-router";

export const Stats = withRouter(React.memo(({user, loading, location: {pathname}}) => (
        <div className={styles.container}>
            {
                !loading &&
                <>
                    <StatUnit count={user?.track_count} active={pathname.includes('tracks')}>
                        <Link
                            to={`/users/${user?.id}/tracks`}
                            data-testid='userTracksLink'
                        >
                            Tracks
                        </Link>
                    </StatUnit>
                    <StatUnit count={user?.public_favorites_count} active={pathname.includes('liked')}>
                        <Link
                            to={`/users/${user?.id}/liked`}
                            data-testid='userLikedTracksLink'
                        >
                            Likes
                        </Link>
                    </StatUnit>
                    <StatUnit count={user?.followers_count}>
                        <div>Followers</div>
                    </StatUnit>
                    <StatUnit count={user?.followings_count}>
                        <div>Followings</div>
                    </StatUnit>
                </>
            }
        </div>
    )
));