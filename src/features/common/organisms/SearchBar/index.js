import React, {useCallback, useEffect, useRef} from "react";
import styles from './styles.module.scss';
import {withRouter} from "react-router";

export const SearchBar = withRouter(({visible, hideBar, history}) => {
    let barRef = useRef();
    let inputRef = useRef();

    const except = useCallback(
        event => event.target.id === 'searchButton' || event.target.id === 'searchIcon'
    , []);

    useOnClickOutside(barRef, hideBar, except);

    useEffect(() => {
        barRef.current.className = visible ? styles.searchBarAppear : styles.searchBarLeave;
        if (visible)
            inputRef.current.focus();
    }, [visible]);

    const search = event => {
        event.preventDefault();
        let value = inputRef.current.value;
        if (value) {
            hideBar();
            inputRef.current.value = '';
            history.push(`/search/${value}`);
        }
    };

    return (
        <div ref={barRef} className={styles.searchBarLeave}>
            <form className={styles.barContainer} onSubmit={search}>
                <input ref={inputRef} className={styles.searchInput} type='text' maxLength={60}
                       placeholder='Search Tracks'/>
            </form>
        </div>
    );
});

function useOnClickOutside(ref, handler, except) {
    useEffect(
        () => {
            const listener = event => {
                if (!ref.current || ref.current.contains(event.target) || except(event))
                    return;

                handler(event);
            };

            document.addEventListener('mousedown', listener);
            document.addEventListener('touchstart', listener);

            return () => {
                document.removeEventListener('mousedown', listener);
                document.removeEventListener('touchstart', listener);
            };
        }, [ref, handler, except]);
}