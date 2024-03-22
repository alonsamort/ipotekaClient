import React from 'react';
import styles from './Button.module.css';
import cn from "classnames";
function Button(props) {
    return (
        <>
            <div className={cn(styles.wrap, props.className)}></div>
        </>

    );
}

export default Button;
