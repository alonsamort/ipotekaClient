import React, {useState} from 'react';
import styles from './Header.module.css';
import Logo from "./Logo";
import Navbar from "./Navbar";
import Social from "./Social";
import ButtonContact from "./ButtonContact";
import Burger from "./Burger";
import cn from "classnames";
import Form from "../Form/Form"


function Header({showButtonContact, showSocial, navbarItems, className}) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    // Функция для закрытия модального окна
    const closeModal = () => {
        setIsModalOpen(false);
    };


    return (
        <div className={cn(styles.wrap, className, {[styles.otherPage]: !showSocial && !showButtonContact})}
             style={{gridTemplateAreas: !showSocial && !showButtonContact && " logo navbar "}}>

            <Logo className={styles.logo}></Logo>
            <Navbar items={navbarItems} className={styles.navbar}></Navbar>
            {showSocial && <Social className={styles.social}></Social>}
            {showButtonContact &&
                <ButtonContact onClick={openModal} className={styles.buttonCall}>Связаться с нами</ButtonContact>}
            <Burger className={styles.burger}></Burger>

            {isModalOpen &&
                <div style={{position: "fixed", background:"rgba(0,0,0, 0.2)", zIndex:1, width: "100vw", height: "100vh", top: "0", left: "0"}}><Form
                    title="Заявка на звонок"
                    subtitle="Оставьте свои контактные данные, и наши специалисты вам перезвонят"
                    className2={styles.headingForm} className={styles.form} showCloseButton={true}
                    onCloseModal={closeModal}>


                </Form> </div>
            }

        </div>
    );
}

export default Header;
