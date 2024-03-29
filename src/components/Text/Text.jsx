import React from 'react';
import styles from './Text.module.css';
import cn from "classnames";
import Title from "../Preview/Title";
import Subtitle from "../Preview/Subtitle";
function Text(props) {
    return (
        <>
            <div className={cn(styles.wrap, props.className)}>
                <Title></Title>
                <Subtitle></Subtitle> 
            </div>
        </>

    );
}

export default Text;
