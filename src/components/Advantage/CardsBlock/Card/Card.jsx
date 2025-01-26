import React, { useState } from 'react';
import styles from './Card.module.css';
import cn from "classnames";

function Card(props) {
    const [expanded, setExpanded] = useState(false); // Состояние для отображения полного описания

    return (
        <>
            <div className={cn(styles.wrap, props.className)}>
                <img className={styles.image} src={props.imageUrl} alt="картинка" width="124px" height="124px" />
                <div className={styles.content}>
                    <h2 className={styles.title}>{props.title}</h2>
                    <p className={styles.description}>{props.description}</p>
                    {expanded && ( // Показываем дополнительный заголовок и текст только если expanded === true
                        <>
                            <div className={styles.hideText}>
                                <h3 className={styles.additionalTitle}>{props.additionalTitle}</h3>
                                <p className={styles.additionalText}>{props.additionalText}</p></div>
                            <div className={styles.hideText2}>
                                <h3 className={styles.additionalTitle}>{props.additionalTitle2}</h3>
                                <p className={styles.additionalText}>{props.additionalText2}</p></div>
                        </>
                    )}
                    <p className={styles.more} onClick={() => setExpanded(!expanded)}>
                        {expanded ? 'скрыть' : 'читать больше'}
                    </p>
                </div>
            </div>
        </>
    );
}

export default Card;