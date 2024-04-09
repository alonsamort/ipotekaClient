import React from 'react';
import styles from './Images.module.css';
import cn from "classnames";
import Spiner from "./Spiner";
function Images(props) {
    return (
        <>
            <div className={cn(styles.wrap, props.className)}>
                <Spiner className={styles.spinner}/>
                <img className={styles.cards} src={"./Cards.png"} alt={"карточки домов"} width={"566px"} height={"457px"}/>
            </div>
        </>

    );
}

export default Images;
