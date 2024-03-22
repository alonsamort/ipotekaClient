import React from 'react';
import styles from './Spiner.module.css';
import cn from "classnames";
function Spiner(props) {
    return (
        <>
            <div className={cn(styles.wrap, props.className)}></div>
        </>

    );
}

export default Spiner;
