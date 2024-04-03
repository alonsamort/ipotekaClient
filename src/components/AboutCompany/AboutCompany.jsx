import React from 'react';
import styles from './AboutCompany.module.css';
import cn from "classnames";
function AboutCompany(props) {
    return (
        <>
            <div className={cn(styles.wrap, props.className)}></div>
        </>

    );
}

export default AboutCompany;
