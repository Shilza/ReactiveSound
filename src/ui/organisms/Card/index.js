import React, {useEffect} from "react";
import AOS from 'aos';
import styles from './styles.module.scss';

export const Card = ({ children }) => {
    useEffect(() => {
        AOS.init({
            duration: 1000
        })
    });

    return (
        <article className={styles.card} data-aos="fade-up">
            {children}
        </article>
    );
};
