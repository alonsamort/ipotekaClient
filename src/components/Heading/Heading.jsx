import React from 'react';
import styles from './Heading.module.css';
import cn from "classnames";
function Heading(props) {
    return (
        <>
            <div className={cn(styles.wrap, props.className)}>
                <h2 className={styles.title}>{[props.title]}</h2>
            </div>
        </>

    );
}

export default Heading;
