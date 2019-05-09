import React from "react";
import {Icon} from "../../../../ui/atoms/";
import styles from './styles.module.scss';
import {Button} from "../../../../ui/atoms";

export const Navigation = ({onSearch}) => (
    <nav className={styles.container}>
        <ul className={styles.iconsList}>
            <li>
                <Button onClick={onSearch} id='searchButton'>
                    <Icon id='searchIcon' name='search' width='1.1em' height='1.1em' viewBox='0 0 500 500'/>
                </Button>
            </li>
            <li>
                <Button>
                    <a href='http://soundcloud.com/' rel='noopener noreferrer' target='_blank'>
                        <Icon name='soundcloud' width='1.1em' height='1.1em' viewBox='0 0 100 100'/>
                    </a>
                </Button>
            </li>
            <li>
                <Button>
                    <a href='https://github.com/Shilza/ReactiveSound' rel='noopener noreferrer' target='_blank'>
                        <Icon name='github' width='1.1em' height='1.1em' viewBox='0 0 430 430'/>
                    </a>
                </Button>
            </li>
        </ul>
    </nav>
);