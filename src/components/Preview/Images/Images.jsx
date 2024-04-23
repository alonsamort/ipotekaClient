import React from 'react';
import styles from './Images.module.css';
import cn from "classnames";
import Spiner from "./Spiner";

function Images(props) {
    return (
        <>
            <div className={cn(styles.wrap, props.className)}>

                <img className={styles.cards} src={`./${props.image}.png`} alt={"карточки домов"} width={props.width}
                    />
            </div>
        </>

    );
}

export default Images;
