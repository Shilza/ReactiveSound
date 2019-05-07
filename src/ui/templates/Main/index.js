import React from "react";
import styles from './styles.module.scss';
import {withLoader} from "../../../features/common/organisms";

export const Main = withLoader(({children}) => <main className={styles.mainContainer}>{children}</main>);