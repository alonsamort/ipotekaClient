import React from 'react';
import styles from './Info.module.css';
import cn from "classnames";
function Info(props) {
    return (
        <>
            <div className={cn(styles.wrap, props.className)}>
                <a className={styles.link} href="#" ><p className={styles.title}>{props.contacts.title}</p></a>
                <span className={styles.subTitle}>{props.contacts.subtitle}</span>
            </div>
        </>

    );
}

export default Info;
