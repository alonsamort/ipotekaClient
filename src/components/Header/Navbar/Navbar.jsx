import React from 'react';
import styles from './Navbar.module.css';
import cn from "classnames";


const navbarItems = [
    { label: 'О нас', link: '#aboutBlock', text: 'О нас' },
    { label: 'Услуги', link: '#serviceBlock', text: 'Услуги' },
    { label: 'Отзывы', link: '#reviewBlock', text: 'Отзывы' },
    { label: 'Контакты', link: '#contactsBlock', text: 'Контакты' },
];
function Navbar(props) {
    return (
        <nav className={cn(styles.wrap, props.className)}>
            {props.items.map((item, index) => (
                <a key={index} href={item.link}>{item.label}</a>
            ))}
        </nav>
    );
}

export default Navbar;
