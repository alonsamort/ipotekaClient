import React from 'react';
import styles from './DoubleHeading.module.css';
import cn from "classnames";
function DoubleHeading(props) {
    return (
        <>
            <div className={cn(styles.wrap, props.className)}>
                <p className={styles.miniTitle}>{[props.miniTitle]}</p>
                <h2 className={cn({[styles.title]: props.size === "md", [styles.titleXs]: props.size === "xs"})}>
                    {[props.title]}
                </h2>


            </div>
        </>

    );
}

export default DoubleHeading;
