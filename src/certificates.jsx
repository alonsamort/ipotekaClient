import cn from "classnames";
import styles from './certificates.module.css';
import React from "react";
import Certificate from "./components/Certificate";
import text from "./components/Preview/Text";
import Header from "./components/Header";
import PopupTech from "./components/PopupTech";
import Button from "./components/Preview/Button";
import Breadcrumbs from "./components/Breadcrumbs";
const navbarItems = [
    { label: 'Условия',sectionId: 'conditions' },
    { label: 'Как получить ипотеку', sectionId: 'stages' },
    { label: 'Отзывы', sectionId: 'review' },
    { label: 'Контакты', sectionId: 'contacts' },

];
const breadcrumb = [
    {
        label: 'Главная', path: '/'
    },
    {
        label: 'Сертификаты', link: '#aboutBlock'
    },

];
function Certificates(props) {
    return (
        <>
            <div className="container">


                {/* <Header className={styles.header} showButtonContact={true} showSocial={true}
                            navbarItems={navbarItems}/> */}
                <Certificate></Certificate>
                <Breadcrumbs className={styles.breadcrumbs} items={breadcrumb}
                             icon={<svg className={styles.svg} style={{minWidth: "18px", minHeight: "18px"}}
                                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                 <path
                                     d="M7.75694 6.34292L9.17115 4.92871L16.2422 11.9998L9.17112 19.0708L7.75691 17.6566L13.4138 11.9998L7.75694 6.34292Z"
                                     fill="#666A79"/>
                             </svg>}
                />


            </div>

        </>

    )
        ;
}

export default Certificates;