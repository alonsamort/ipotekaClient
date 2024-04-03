import React from 'react';
import styles from './Card.module.css';
import cn from "classnames";
function Card(props) {
    return (
        <>
            <div className={cn(styles.wrap, props.className)}>
                <img src={props.imageUrl} alt="картинка" width="124px" height="124px" />
                <div className={styles.content}>
                    <h2 className={styles.title}>{props.title}</h2>
                    <p className={styles.description}>{props.description}</p>
                    <p className={styles.more}>читать больше</p>
                </div>


            </div>
        </>

    );
}

export default Card;
