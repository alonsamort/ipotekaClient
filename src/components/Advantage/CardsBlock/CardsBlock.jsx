import React from 'react';
import styles from './CardsBlock.module.css';
import cn from "classnames";
import Card from "./Card";

function CardsBlock(props) {
    return (
        <>
            <div className={cn(styles.wrap, props.className)}>
                <Card className={styles.card1}
                      imageUrl="list.png"
                      title="Прозрачность и доверие"
                      description="Наша работа основана на прозрачных процессах и честной коммуникации"/>

                <Card className={styles.card2}
                      imageUrl="/time.png"
                      title="Экономим ваше время"
                      description="Экономьте время на важном, остальные заботы мы возьмем на себя "/>
                <Card className={styles.card3}
                      imageUrl="/idea.png"
                      title="Индивидуальный подход"
                      description="Разрабатываем индивидуальные стратегии  и предлагаем наилучшие решения"/>
                <Card className={styles.card4}
                      imageUrl="/cup.png"
                      title="Опыт и надежность"
                      description="Специализируемся на рынке ипотечных услуг уже более 5 лет"/>
            </div>
        </>

    );
}

export default CardsBlock;
