import React, {useState} from "react";
import {Navigation} from '../../molecules';
import {Name} from '../../molecules';
import styles from './styles.module.scss';
import {SearchBar} from "../SearchBar";

export const Header = () => {
    let [isSearchBarVisible, setIsSearchBarVisible] = useState(false);

    const onSearch = () => {
        setIsSearchBarVisible(!isSearchBarVisible);
    };

    return (
        <header className={styles.container}>
            <div className={styles.header}>
                <Name/>
                <Navigation onSearch={onSearch}/>
            </div>
            <SearchBar visible={isSearchBarVisible}/>
        </header>
    );
};
