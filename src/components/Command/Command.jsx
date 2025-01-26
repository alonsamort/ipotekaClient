import React from 'react';
import styles from './Command.module.css';
import cn from "classnames";
import PersonalCard from "./PersonalCard";
import Heading from "../Heading";

function Command(props) {
    return (
        <>
            <div id="comand" className={cn(styles.wrap, props.className)}>
                <Heading className={`${styles.comandTitle} ${styles.centered}`} title="Наша команда"/>
                <div className={styles.comand}>
                    <PersonalCard imageUrl="/anna2.png" name="Пивоварова Анна" position="Ипотечный брокер"/>
                    <PersonalCard imageUrl="/mar.png" name="Ситникова Марина" position="Ипотечный брокер"/>
                    <PersonalCard imageUrl="/annaev.png" name="Евдокимова Анна" position="Юрист"/>
                    <PersonalCard imageUrl="/alena.png" name="Суслова Алёна" position="Юрист"/></div>

            </div>
        </>

    );
}

export default Command;
