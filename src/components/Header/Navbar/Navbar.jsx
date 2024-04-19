import React from 'react';
import styles from './Navbar.module.css';
import cn from "classnames";
function Navbar(props) {
    return (
        <nav className={cn(styles.wrap, props.className)}>
            <a href="#aboutBlock">О нас</a>
            <a href="#serviceBlock">Услуги</a>
            <a href="#reviewBlock">Отзывы</a>
            <a href="#contactsBlock">Контакты</a></nav>
    );
}

export default Navbar;
