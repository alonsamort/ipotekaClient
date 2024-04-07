import React from 'react';
import styles from './Advantage.module.css';
import cn from "classnames";
import Title from "./Title";
import Card from "./CardsBlock/Card";
import CardsBlock from "./CardsBlock";
function Advantage(props) {
    return (
        <>
            <div className={cn(styles.wrap, props.className)}>

                <CardsBlock></CardsBlock>

            </div>
        </>

    );
}

export default Advantage;
