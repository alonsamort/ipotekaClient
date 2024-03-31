import React from 'react';
import styles from './Advantage.module.css';
import cn from "classnames";
function Advantage(props) {
    return (
        <>
            <div className={cn(styles.wrap, props.className)}></div>
        </>

    );
}

export default Advantage;
