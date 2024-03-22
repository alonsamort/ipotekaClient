import React from 'react';
import styles from './Subtitle.module.css';
import cn from "classnames";
function Subtitle(props) {
    return (
        <>
            <div className={cn(styles.wrap, props.className)}></div>
        </>

    );
}

export default Subtitle;
