import React from 'react';
import styles from './Subtitle.module.css';
import cn from "classnames";
function Subtitle(props) {
    return (
        <>
            <div className={cn(styles.wrap, props.className)}>
                {props.children}
            </div>
        </>

    );
}

export default Subtitle;
