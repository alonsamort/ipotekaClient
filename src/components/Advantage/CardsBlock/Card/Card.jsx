import React from 'react';
import styles from './Card.module.css';
import cn from "classnames";
function Card(props) {
    return (
        <>
            <div className={cn(styles.wrap, props.className)}>
                <img className={cn(styles.img, props.img)} src="/list.png" alt="список" width={"124px"} height={"124px"}/>
                <div className={styles.content}><h2 className={cn(styles.title, props.title)}> Прозрачность и доверие</h2>
                    <p className={cn(styles.description, props.description)}>Наша работа основана на прозрачных <br/>процессах и честной
                        коммуникации</p>
                    <p className={styles.more}>читать больше</p>
                </div>


            </div>
        </>

    );
}

export default Card;
