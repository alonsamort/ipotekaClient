import React from 'react';
import styles from './Header.module.css';
import cn from "classnames";
function Header(props) {
    return (
        <>
            <div className={cn(styles.wrap, props.className)}>
                <h2 className={styles.title}>{props.title}</h2>
                <p className={styles.subtitle}>{props.subtitle} </p>

            </div>
        </>

);
}

export default Header;
