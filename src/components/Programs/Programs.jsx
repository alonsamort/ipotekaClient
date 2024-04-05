import React from 'react';
import styles from './Programs.module.css';
import cn from "classnames";
import ProgramCard from "./ProgramCard";
import DoubleHeading from "../DoubleHeading";
import Heading from "../Heading";

function Programs(props) {
    return (
        <>
            <div className={cn(styles.wrap, props.className)}>
                <div className={styles.text}>
                    <h2 className={styles.title}> Ипотечные программы </h2>
                    <p className={styles.more}>Свернуть</p>
                </div>


                <div className={styles.content}>
                    <ProgramCard
                        color="yellow"
                        imageUrl="/bear.png" title="Семейная ипотека"
                        rate="от 5%"
                    />
                    <ProgramCard
                        color="green"
                        imageUrl="/apartament.png" title="Вторичное жильё"
                        rate="от 16,5%"
                    />
                    <ProgramCard
                        color="red"
                        imageUrl="/government.png" title="Господдержка"
                        rate="от 8%"
                    />
                    <ProgramCard
                        color="blue"
                        imageUrl="/notebook.png" title="Рефинансирование"
                        rate="от 16%"
                    />
                    <ProgramCard
                        color="purple"
                        imageUrl="/computer.png" title="Коммерция"
                        rate="от 16%"
                    />
                    <ProgramCard
                        color="orange"
                        imageUrl="/build.png" title="Строительство"
                        rate="от 5,8%"
                    />

                </div>
            </div>
        </>

    );
}

export default Programs;
