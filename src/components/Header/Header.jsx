import React from 'react';
import styles from './Header.module.css';
import Logo from "./Logo";
import Navbar from "./Navbar";
import Social from "./Social";
import ButtonContact from "./ButtonContact";
import Burger from "./Burger";
import cn from "classnames";

function Header({ showButtonContact, showSocial, navbarItems, className }) {
    return (
        <div className={cn(styles.wrap,className)} >

            <Logo className={styles.logo}></Logo>
            <Navbar items={navbarItems} className={styles.navbar} ></Navbar>
            {showSocial && <Social className={styles.social}></Social>}
            {showButtonContact && <ButtonContact className={styles.buttonCall}>Связаться с нами</ButtonContact>}
<Burger className={styles.burger}></Burger>
            </div>
    );
}

export default Header;
