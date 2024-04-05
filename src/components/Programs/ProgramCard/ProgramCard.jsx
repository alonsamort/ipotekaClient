import React from 'react';
import styles from './ProgramCard.module.css';
import cn from "classnames";

function ProgramCard(props) {
    return (
        <>
            <div className={cn(styles.wrap, props.className, styles[props.color])}>
                <img src={props.imageUrl} alt="ипотечные программы" width="100px" height="90px" />
                <div className={styles.content}>
                    <h2 className={styles.title}>{props.title}</h2>
                    <p className={styles.badge}>{props.rate}</p>
                </div>
            </div>
        </>

    );
}

export default ProgramCard;
