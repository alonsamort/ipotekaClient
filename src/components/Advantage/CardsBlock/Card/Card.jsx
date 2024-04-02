import React from 'react';
import styles from './Card.module.css';
import cn from "classnames";
function Card(props) {
    return (
        <>
            <div className={cn(styles.wrap, props.className)}>
                <img src="/cup.png" alt="кубок"/>
            </div>
        </>

    );
}

export default Card;
