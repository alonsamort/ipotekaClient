import React from 'react';
import styles from './Navbar.module.css';
import cn from "classnames";
function Navbar(props) {
    return (
        <nav className={cn(styles.wrap, props.className)}>
            <a href="#">О нас</a>
            <a href="#">Услуги</a>
            <a href="#">Отзывы</a>
            <a href="#">Контакты</a></nav>
    );
}

export default Navbar;
