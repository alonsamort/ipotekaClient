import cn from "classnames";
import styles from './certificates.module.css';
import React from "react";
import text from "./components/Preview/Text";
import Header from "./components/Header";
import PopupTech from "./components/PopupTech";
import Button from "./components/Preview/Button";
const navbarItems = [
    { label: 'Условия',sectionId: 'conditions' },
    { label: 'Как получить ипотеку', sectionId: 'stages' },
    { label: 'Отзывы', sectionId: 'review' },
    { label: 'Контакты', sectionId: 'contacts' },

];
function Certificates(props) {
    return (
        <>
            <div className={cn(styles.container, props.className)} style={{padding: "16px 40px 40px 40px"}}>


                {/* <Header className={styles.header} showButtonContact={true} showSocial={true}
                            navbarItems={navbarItems}/> */}
<PopupTech imageUrl="/sadsmile.png" title="Кажется тут пусто!" text="Сертификаты появятся позжe"  textButton="Вернутся"/>


            </div>

        </>

    )
        ;
}

export default Certificates;