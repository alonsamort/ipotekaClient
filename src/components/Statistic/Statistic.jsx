import React from 'react';
import styles from './Statistic.module.css';
import cn from "classnames";
import Mark from "./Mark";

function Statistic(props) {
    return (
        <>
            <div className={cn(styles.wrap, props.className)}>
                <Mark className={styles.mark} title="500+"
                      size="md"
                      descriprion="Довольных клиентов"/>
                <Mark  className={styles.mark}  title="300+"
                      size="md"
                      descriprion="Успешно завершенных сделок"/>
                <Mark className={styles.mark}title="99%"
                      size="md"
                      descriprion="Одобренных заявок"/>

            </div>
        </>

    );
}

export default Statistic;
