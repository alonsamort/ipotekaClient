import React from 'react';
import styles from './List.module.css';
import cn from "classnames";
import Heading from "./Heading";
import Item from "./Item";
function List(props) {
    return (
        <>
            <div className={cn(styles.wrap,  props.className)} style={{padding: props.padding}}>
                <Heading className={styles.title} style={{marginBottom:'10px',}}>{props.title} {props.style}</Heading>
                <Item icon={props.icon} items={props.children}/>
            </div>
        </>

    );
}
// <Название_тега Название_атрибута="значение">тело </закрывющий_тег>
export default List;
