import React from 'react';
import styles from './Service.module.css';
import cn from "classnames";
import Card from './Card';
import Heading from "../Heading";

function Service(props) {
    return (
        <div id="service"  className={cn(styles.wrap, props.className)}>
            <Heading className={`${styles.serviceTitle} ${styles.centered}`}
                     title="Услуги"/>
<div className={styles.serviceCard}> {props.data.map(card => <Card key={card.id} {...card} />)}</div>


        </div>
    );
}

export default Service;
