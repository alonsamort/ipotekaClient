import React from 'react';
import styles from './Command.module.css';
import cn from "classnames";
import PersonalCard from "./PersonalCard";

function Command(props) {
    return (
        <>
            <div className={cn(styles.wrap, props.className)}>
                <PersonalCard imageUrl="/persona.png" name="Пивоварова Анна" position="Ипотечный брокер"/>
                <PersonalCard imageUrl="/persona.png" name="Евдокимова Анна" position="Юрист"/>
                <PersonalCard imageUrl="/persona.png" name="Ситникова Марина" position="Ипотечный брокер"/>
                <PersonalCard imageUrl="/persona.png" name="Суслова Алёна" position="Юрист"/>
            </div>
        </>

    );
}

export default Command;
