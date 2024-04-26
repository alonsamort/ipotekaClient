import React from 'react';
import styles from './Item.module.css';
import cn from "classnames";
function Item(props) {
    return (
        <>
            {props.items && props.items.map((item, index)=> {
             return (
               <p className={cn(styles.wrap, props.className)} key={index}>
                   {props.icon} {item}
                </p>)
            })}

        </>

    );
}

export default Item;
