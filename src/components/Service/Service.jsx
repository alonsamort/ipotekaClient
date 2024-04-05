import React from 'react';
import styles from './Service.module.css';
import cn from "classnames";
import Card from './Card';

function Service(props) {
    return (
        <div className={cn(styles.wrap, props.className)}>
            {props.data.map(card => <Card key={card.id} {...card} />)}
        </div>
    );
}

export default Service;
