import React from 'react';
import styles from './Banks.module.css';
import cn from "classnames";
function Banks(props) {
    return (
        <>
            <div className={cn(styles.wrap, props.className)}></div>
        </>

    );
}

export default Banks;
