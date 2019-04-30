import React, {useEffect, useRef} from "react";
import styles from './styles.module.scss';

export const SearchBar = ({visible}) => {
    let barRef = useRef();

    useEffect(() => {
            barRef.current.className = visible ? styles.searchBarAppear : styles.searchBarLeave;
    }, [visible]);

    return (
        <div ref={barRef} className={styles.searchBarLeave}>
            <form className={styles.barContainer} onSubmit={() => console.log('Submit')}>
                <input className={styles.searchInput} placeholder='Search Tracks'/>
            </form>
        </div>
    );
};