import React from 'react';
import styles from './PersonalCard.module.css';
import cn from "classnames";
function PersonalCard(props) {
    return (
        <>
            <div className={cn(styles.wrap, props.className)}>
                <img className={styles.image} src={props.imageUrl} alt="фотография работника" width="226px" height="312px" />
                <div className={styles.content}>
                    <h2 className={styles.name}>{props.name}</h2>
                    <p className={styles.position}>{props.position}</p>
                </div>
            </div>
        </>

    );
}

export default PersonalCard;
