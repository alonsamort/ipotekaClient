import React from 'react';
import styles from './Title.module.css';
import cn from "classnames";
function Title(props) {
    return (
        <>
            <div className={cn(styles.wrap, props.className)}>
                {props.children}
            </div>
        </>

    );
}

export default Title;
