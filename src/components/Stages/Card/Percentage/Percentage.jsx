import React from 'react';
import styles from './Percentage.module.css';
import cn from "classnames";
function Percentage(props) {
    return (
        <>
            <div className={cn(styles.wrap, props.className)}>
                <p className={styles.number}>{props.number}</p>
                <span className={styles.percent}>{props.pct}</span>
            </div>
        </>

    );
}

export default Percentage;
