import React from 'react';
import styles from './Header.module.css';
import Logo from "./Logo";
import Navbar from "./Navbar";
import Social from "./Social";
import ButtonContact from "./ButtonContact";
import Burger from "./Burger";

function Header(props) {
    return (
        <div className={styles.wrap}>

            <Logo className={styles.logo}></Logo>
            <Navbar className={styles.navbar}></Navbar>
            <Social className={styles.social}></Social>
            <ButtonContact className={styles.buttonCall}>Связаться с нами</ButtonContact>
<Burger className={styles.burger}></Burger>
            </div>
    );
}

export default Header;
