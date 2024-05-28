import React from 'react';
import styles from './Item.module.css';
import cn from "classnames";
import {Link} from "react-router-dom";


function Item(props) {
    const { items } = props;
    return (
        <>
            <div className={cn(styles.wrap, props.className)}>
                {items.map((item, index) => (
                    <span className={styles.item} key={index}>
                    {index !== items.length - 1 ? (
                        <Link to={item.path} className={styles.link}>
                            {item.label}
                        </Link>
                    ) : (
                        <span className={styles.link}>{item.label}</span>
                    )}
                        {index === 0 && props.icon && (
                            <span className={styles.icon}>{props.icon}</span>
                        )}
                </span>
                ))}
            </div>
        </>

    );
}

export default Item;
