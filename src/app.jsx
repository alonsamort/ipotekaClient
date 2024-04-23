import React from 'react';
import styles from './app.module.css';
import cn from "classnames";
import Header from "./components/Header";
import Preview from "./components/Preview";
import Scorecard from "./components/Scorecard";
import Zigzag from "./components/Zigzag";
import Heading from "./components/Heading";
import ListHeader from "./components/ListHeader";
import ListHeaderCard from "./components/ListCards/ListHeaderCard";
import ListCards from "./components/ListCards";

const navbarItems = [
    {label: 'Условия'},
    {label: 'Как получить ипотеку'},
    {label: 'Отзывы'},
    {label: 'Контакты'},

];

const sectionHeadings = {
    conditions: "Выгодные условия",

};

function App(props) {
    return (
        <>
            <div className={cn(styles.container, props.className)}>

                <Header className={styles.otherPage} showButtonContact={false} showSocial={false}
                        navbarItems={navbarItems}/>
                <Preview className={styles.preview} isIcon={false}
                         title={(<>Семейная ипотека: <br/> Программа для <br/> семей с детьми</>)}
                         textButton="Получить ипотеку"
                         image="teddyBear"
                         width="420px"

                >
                    Постройте своё будущее вместе
                    с семейной ипотекой
                </Preview>
                                <Scorecard className={styles.scorecard}/>
                                <Zigzag/>
                                <Heading  className={`${styles.aboutTitle} ${styles.centered}`}  title={sectionHeadings.conditions}/>
<ListCards className={styles.listCard} />

            </div>
        </>

    );
}

export default App;
