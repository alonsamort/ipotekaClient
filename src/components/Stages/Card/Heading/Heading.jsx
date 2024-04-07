import React from 'react';
import styles from './Heading.module.css';
import cn from "classnames";
function Heading(props) {
    return (
        <>
            <div className={cn(styles.wrap, props.className)}>
                <p className={styles.miniTitle}>{props.miniTitle}</p>
                <h3 className={styles.title}>{props.title}</h3>
                <p className={styles.subtitle}>{props.subtitle}</p>
            </div>
        </>

    );
}

export default Heading;
