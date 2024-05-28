import React, { useEffect } from 'react';
import styles from './family.module.css';
import cn from "classnames";
import Header from "./components/Header";
import Preview from "./components/Preview";
import Scorecard from "./components/Scorecard";
import Zigzag from "./components/Zigzag";
import Heading from "./components/Heading";
import { advantsgeItems, CardsList } from "./components/Cards/Cards";
import Conditions from "./components/Conditions";
import Form from "./components/Form";
import { card } from "./components/Review/data";
import Review from "./components/Review";
import Contacts from "./components/Contacts";
import { info } from "./components/Contacts/data";
import Breadcrumbs from "./components/Breadcrumbs";
import Footer from "./components/Footer";
import Stages from "./components/Stages";
import { cards as cardStage } from "./components/Stages/data";
import { motion, AnimatePresence } from 'framer-motion';

const family = [
    { title: 'от 5%', subtitle: 'Ипотечная ставка' },
    { title: '30 лет', subtitle: 'Срок кредита' },
    { title: '300 тыс.', subtitle: 'Мин. сумма кредита' },
    { title: '12 млн', subtitle: 'Макс. сумма кредита' },
];

const navbarItems = [
    { label: 'Условия',sectionId: 'conditions' },
    { label: 'Как получить ипотеку', sectionId: 'stages' },
    { label: 'Отзывы', sectionId: 'review' },
    { label: 'Контакты', sectionId: 'contacts' },
];

const sectionHeadings = {
    conditions: "Выгодные условия",
    review: "Отзывы наших клиентов",
    contacts: "Контакты",
    stages: "Этапы оформления ипотеки"
};

function Family(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const newItems = [
        {
            title: 'Какие семьи могут оформить ипотеку по ставке от 6 %?',
            items: ['Семьи, в которых с 1 января 2018 года по 31 декабря 2023 года родился первый ребёнок или последующие дети;', 'Семьи, в которых есть двое и более несовершеннолетних детей;', 'Семьи, в которых воспитывается ребёнок с инвалидностью;', 'Родители усыновлённых (удочерённых) детей могут принять участие в программе на тех же условиях, \n' + 'что и кровные родители.']
        },
    ];

    const insurance = [
        {
            title: 'Оформление страхования\n' + 'для вас бесплатно!',
            items: ['Получите обширное страхование, охватывающее риски, связанные с вашим жильем. Будь то страхование \n' + 'от повреждений, или стихийных бедствий, \n' + 'ваш дом будет полностью защищен;', 'Процесс получения страховки максимально упрощен. \n' + 'Наши специалисты сделают его легким и быстрым, обеспечивая вам мгновенное покрытие']
        },
    ];

    const breadcrumb = [
        { label: 'Главная',  path: '/' },
        { label: 'Семейная ипотека' },
    ];

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={cn(styles.container, props.className)}
            >

                <>
                    <div className="container">

                        <Header className={styles.otherPage} showButtonContact={false} showSocial={false}
                                navbarItems={navbarItems}/>
                        <Preview className={styles.preview} isIcon={false}
                                 title={(<>Семейная ипотека: <br/> Программа для <br/> семей с детьми</>)}
                                 textButton="Получить ипотеку" image="teddyBear" width="420px">
                            Откройте двери своего дома с семейной ипотекой.<br/> Ваша история начинается здесь!
                        </Preview>
                        <Scorecard className={styles.scorecard} items={family}/>
                        <Zigzag/>
                        <Heading className={`${styles.aboutTitle} ${styles.centered}`}
                                 title={sectionHeadings.conditions}/>
                        <CardsList className={styles.cardsList} padding={"24px"} background items={advantsgeItems}
                                   icon={(
                                       <svg style={{minWidth: "24px", minHeight: "24px"}} width="26" height="26"
                                            viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                           <path
                                               d="M12.4193 15.802L8.72051 12.1031L6.87109 13.9525L12.4193 19.5008L21.6664 10.2537L19.817 8.4043L12.4193 15.802Z"
                                               fill="#00071F"/>
                                       </svg>
                                   )}/>
                        <Conditions
                            icon={<svg style={{minWidth: "16px", minHeight: "24px"}} width="16" height="24"
                                       viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line y1="10.5" x2="16" y2="10.5" stroke="#00071F"/>
                            </svg>}
                            image="homeOnBackground" width='566px' className={styles.conditions}
                        />
                        <Conditions items={newItems} flexDirection={"row-reverse"} image="heart" width='566px'
                                    className={styles.conditions2}
                                    icon={<svg style={{minWidth: "22px", minHeight: "22px"}} width="24" height="24"
                                               viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="24" height="24" rx="12" fill="url(#paint0_linear_873_3134)"/>
                                        <path
                                            d="M9.75 15.1641L17.6953 7.18359L18.75 8.23828L9.75 17.2383L5.56641 13.0547L6.58594 12L9.75 15.1641Z"
                                            fill="white"/>
                                        <defs>
                                            <linearGradient id="paint0_linear_873_3134" x1="1.21967" y1="22.6154"
                                                            x2="23.6305" y2="22.0953" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#0057FF"/>
                                                <stop offset="1" stopColor="#00C2FF"/>
                                            </linearGradient>
                                        </defs>
                                    </svg>}/>
                        <Zigzag/>
                        <Form className={styles.form} title="Заметили, что речь идет о вас?"
                              subtitle="Расскажите нам о ваших желаниях и планах по ипотеке, и мы сделаем всё возможное, чтобы ваши мечты о собственном доме стали реальностью, заполните форму и получите бесплатную консультацию от экспертов"/>
                        <Heading className={`${styles.stagesTitle} ${styles.centered}`} title={sectionHeadings.stages}/>
                    </div>

                    <Stages data={cardStage} className={styles.stages}/>
                    <div className="container">
                        <Conditions className={styles.insurence} image="insurence" width='446px' items={insurance}
                                    flexDirection={"row-reverse"} button={true}
                                    icon={<svg style={{minWidth: "16px", minHeight: "24px"}} width="16" height="24"
                                               viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line y1="10.5" x2="16" y2="10.5" stroke="#00071F"/>
                                    </svg>}
                        />

                        <Review className={styles.review} data={card}/>
                        <Contacts data={info} className={styles.contacts}/>
                        <Breadcrumbs className={styles.breadcrumbs} items={breadcrumb}
                                     icon={<svg className={styles.svg} style={{minWidth: "18px", minHeight: "18px"}}
                                                width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                         <path
                                             d="M7.75694 6.34292L9.17115 4.92871L16.2422 11.9998L9.17112 19.0708L7.75691 17.6566L13.4138 11.9998L7.75694 6.34292Z"
                                             fill="#666A79"/>
                                     </svg>}
                        />
                        <Footer className={styles.footer} hideContentGrid={true}/>   </div>
                </>
            </motion.div>
        </AnimatePresence>
    );
}

export default Family;