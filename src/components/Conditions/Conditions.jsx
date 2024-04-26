import React, { useState } from 'react';
import styles from './Conditions.module.css';
import cn from "classnames";
import { CardsList} from "../Cards/Cards";
import List from "../Cards/List";
import Spiner from "../Preview/Images/Spiner";
import Button from "../Preview/Button";

export const defaultItems = [
    {
        title: 'Требования к заёмщику',
        items: ['Заёмщик — гражданин Российской Федерации', 'Возраст заёмщика от 20 до 70 лет \n' +
        '(параметр определяется банком);','Без ранее выданной льготной ипотеки с 23.12.2023']
    },
    {
        title: 'Требования к недвижимости',
        items: ['Покупка квартиры или дома у застройщика', 'Сделка по договору долевого участия','Строительство жилого дома']
    },
]


function Conditions(props) {
    const [items, setItems] = useState(props.items || defaultItems);
    return (
        <>
            <div className={cn(styles.wrap, props.className)} style={{flexDirection: props.flexDirection}}>
                <div className={styles.info}><CardsList className={styles.cardsList} items={items} icon={props.icon}>
                </CardsList>
                    {props.button && (
                        <Button disableAnimation={true} className={styles.button}>Получить страхование</Button>
                    )}</div>
                <img className={styles.cards} src={`./${props.image}.png`} alt={"карточки"} width={props.width}/>

            </div>
        </>

    );
}

export default Conditions;
