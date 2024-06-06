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
                    <PersonalCard imageUrl="/anna.png" name="Пивоварова Анна" position="Ипотечный брокер"/>
                    <PersonalCard imageUrl="/marine.png" name="Ситникова Марина" position="Юрист"/>
                    <PersonalCard imageUrl="/ann1.png" name="Евдокимова Анна" position="Ипотечный брокер"/>
                    <PersonalCard imageUrl="/alen.png" name="Суслова Алёна" position="Юрист"/></div>

            </div>
        </>

    );
}

export default Command;
