import React from 'react';
import styles from './Partners.module.css';
import cn from "classnames";
import Title from "./Title";
import Banks from "./Banks";
function Partners(props) {
    return (
        <>
            <div className={cn(styles.wrap, props.className)}>
                <Title className={styles.title}/>
                <Banks className={styles.banks}/>
            </div>
        </>

    );
}

export default Partners;
