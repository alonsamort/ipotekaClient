import React from 'react';
import styles from './Mark.module.css';
import cn from "classnames";
function Mark(props) {
    return (
        <>
            <div className={cn(styles.wrap, props.className)}>
                <h2 className={styles.title}>{[props.title]}</h2>
                <p className={styles.descriprion}>{[props.descriprion]}</p>
            </div>
        </>

    );
}

export default Mark;
