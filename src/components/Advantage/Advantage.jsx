import React from 'react';
import styles from './Advantage.module.css';
import cn from "classnames";
import Title from "./Title";
import Card from "./CardsBlock/Card";
function Advantage(props) {
    return (
        <>
            <div className={cn(styles.wrap, props.className)}>
                <Title className={styles.title}/>
                <Card/>
            </div>
        </>

    );
}

export default Advantage;
