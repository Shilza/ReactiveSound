import React from "react";
import {Icon} from "../../../../ui/atoms/";
import styles from './styles.module.scss';
import {Button} from "../../../../ui/atoms";

export const Navigation = () => (
    <nav>
        <ul className={styles.iconsList}>
            <li>
                <Button>
                    <Icon name='search' width='1.4em' height='1.4em' viewBox='0 0 500 500'/>
                </Button>
            </li>
            <li>
                <Button>
                    <Icon name='soundcloud'  width='1.4em' height='1.4em' viewBox='0 0 100 100'/>
                </Button>
            </li>
            <li>
                <Button>
                    <Icon name='github' width='1.4em' height='1.4em' viewBox='0 0 500 500'/>
                </Button>
            </li>
        </ul>
    </nav>
);