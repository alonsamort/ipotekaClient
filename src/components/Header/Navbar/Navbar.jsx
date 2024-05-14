import React from 'react';
import styles from './Navbar.module.css';
import cn from "classnames";



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
