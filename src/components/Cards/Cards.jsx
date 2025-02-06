import React from 'react';
import styles from './Cards.module.css';
import cn from "classnames";
import List from "./List";

function Cards(props) {
    return (
        <>
            <div className={cn(styles.wrap, props.className)}>

            </div>
        </>

    );
}

export const advantsgeItems = [
    {
        title: 'Кредит до 15 млн рублей',
        items: ['Москва и область, Санкт-Петербург\n' +
        'и Ленинградская область: до 30 млн ₽', 'Другие регионы РФ: до 15 млн ₽']
    },
    {
        title: 'Первый взнос от 20,1%',
        items: ['Выбирайте срок и платеж, который подходит именно вам', 'Начните с первоначального взноса от 20,1%\n' +
        'и выберите срок ипотеки от 3 до 30 лет']
    },
]

export function CardsList(props) {

    return (
        <>
            <div className={cn(styles.wrap,  props.className)}>
                {props.items.map((item, index) => <List className={cn(styles.card, {[styles.background]: props.background})} padding={props.padding} key={index} title={item.title} icon={props.icon}>{item.items}</List>)}
            </div>
        </>

    );
}

export default Cards;
