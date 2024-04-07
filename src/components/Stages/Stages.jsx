import React from 'react';
import styles from './Stages.module.css';
import cn from "classnames";
import Card from "./Card";
function Stages(props) {
    return (
        <>
            <div className={cn(styles.wrap, props.className)}>
                {props.data.map(cards => <Card key={cards.id} {...cards} />)}
            </div>
        </>

    );
}

export default Stages;
