import React from 'react';
import styles from './CardsBlock.module.css';
import cn from "classnames";
function CardsBlock(props) {
    return (
        <>
            <div className={cn(styles.wrap, props.className)}></div>
        </>

    );
}

export default CardsBlock;
