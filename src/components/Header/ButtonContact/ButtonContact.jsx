import React from 'react';
import styles from './ButtonContact.module.css';
import cn from "classnames";
function ButtonContact(props) {
    return (
        <button className={cn(styles.wrap, props.className)}>
           {props.children}</button>
    );
}

export default ButtonContact;
