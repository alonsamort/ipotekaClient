import React from 'react';
import styles from './Info.module.css';
import cn from "classnames";

function Info(props) {
    const { contacts, className } = props;

    return (
        <>
            <div className={cn(styles.wrap, className)}>
                <a className={styles.link} href={contacts.url} target="_blank">
                    <p className={styles.title}>{contacts.item}</p>
                </a>
                <span className={styles.subTitle}>{contacts.subtitle}</span>
            </div>
        </>
    );
}

export default Info;