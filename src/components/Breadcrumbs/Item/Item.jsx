import React from 'react';
import styles from './Item.module.css';
import cn from "classnames";

const items = [
    { label: 'О нас', link: '#aboutBlock' },
    { label: 'Услуги', link: '#serviceBlock'},
    { label: 'Отзывы', link: '#reviewBlock'},
    { label: 'Контакты', link: '#contactsBlock' },
];
function Item(props) {
    const { items } = props;
    return (
        <>
            <div className={cn(styles.wrap, props.className)} >
                {items.map((item, index) => (
                    <span className={styles.item} key={index}>
                        <a href={item.link} className={styles.link}>
                            {item.label}
                        </a>
                        {/* Проверяем, нужно ли добавить иконку */}
                        {(index === 0 || index === 1) && props.icon && (
                            <span className={styles.icon}>{props.icon}</span>
                        )}
                    </span>
                ))}
            </div>
        </>

    );
}

export default Item;
