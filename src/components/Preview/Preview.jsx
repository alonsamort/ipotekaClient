import React from 'react';
import styles from './Preview.module.css';
import cn from "classnames";
function Preview(props) {
    return (
        <>
            <div className={cn(styles.wrap, props.className)}></div>
        </>

    );
}

export default Preview;
