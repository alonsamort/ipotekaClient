import React from 'react';
import styles from './Card.module.css';
import cn from "classnames";
import Heading from "../../Stages/Card/Heading";
import Advantage from "../../Stages/Card/Advantage";
import Percentage from "../../Stages/Card/Percentage";

function Card(props) {
    return (
        <>
            <div className={cn(styles.wrap, props.className)}>
                <Percentage {...props.circle}/>
                < Heading {...props.heading} />


                <Advantage className={styles.advantage} advantages={props.advantages}/>
            </div>
        </>

    );
}

export default Card;
