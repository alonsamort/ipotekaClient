import React from 'react';
import styles from './Heading.module.css';
import cn from "classnames";
function Heading(props) {

    return (
        <>
            <h4 className={cn(styles.wrap, props.className)}>
                {props.children}
            </h4>
        </>

    );
}

export default Heading;
