import React from 'react';
import styles from './Header.module.css';
import Logo from "./Logo";
import Navbar from "./Navbar";
import Social from "./Social";
import ButtonContact from "./ButtonContact";

function Header(props) {
    return (
        <div className={styles.wrap}>
            <Logo className={styles.logo}></Logo>
            <Navbar className={styles.navbar}></Navbar>
            <Social className={styles.social}></Social>
            <ButtonContact className={styles.buttonCall}>Связаться с нами</ButtonContact>
        </div>
    );
}

export default Header;
