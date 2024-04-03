import React from 'react';
import styles from './Statistic.module.css';
import cn from "classnames";
import Mark from "./Mark";

function Statistic(props) {
    return (
        <>
            <div className={cn(styles.wrap, props.className)}>
                <Mark  title="500+"
                descriprion="Довольных клиентов"/>
                <Mark  title="300+"
                       descriprion="Успешно завершенных сделок"/>
                <Mark  title="99%"
                       descriprion="Одобренных заявок"/>

            </div>
        </>

    );
}

export default Statistic;
