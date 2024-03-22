import React from 'react';
import styles from './TemplateName.module.css';
import cn from "classnames";
function TemplateName(props) {
    return (
        <>
            <div className={cn(styles.wrap, props.className)}></div>
        </>

    );
}

export default TemplateName;
