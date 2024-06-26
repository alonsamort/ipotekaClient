import React, {useEffect} from "react";
import styles from './refinancing.module.css';
import cn from "classnames";
import Header from "./components/Header";
import Preview from "./components/Preview";
import Scorecard from "./components/Scorecard";
import Zigzag from "./components/Zigzag";
import Heading from "./components/Heading";
import {advantsgeItems, CardsList} from "./components/Cards/Cards";
import Conditions from "./components/Conditions";
import Form from "./components/Form";
import {card} from "./components/Review/data";
import Review from "./components/Review";
import Contacts from "./components/Contacts";
import {info} from "./components/Contacts/data";
import Breadcrumbs from "./components/Breadcrumbs";
import breadcrumbs from "./components/Breadcrumbs";
import Footer from "./components/Footer";
import Stages from "./components/Stages";
import {cards as cardStage} from "./components/Stages/data";
import { motion, AnimatePresence } from 'framer-motion';

const secondary = [
    {title: 'от 16%', subtitle: 'Ипотечная ставка'},
    {title: 'до 30 лет', subtitle: 'Срок кредита'},
    {title: '300 тыс.', subtitle: 'Мин. сумма кредита'},
    {title: '30 млн', subtitle: 'Макс. сумма кредита'},
];
const navbarItems = [
    { label: 'Условия',sectionId: 'conditions' },
    { label: 'Как получить ипотеку', sectionId: 'stages' },
    { label: 'Отзывы', sectionId: 'review' },
    { label: 'Контакты', sectionId: 'contacts' },

];

const sectionHeadings = {
    conditions: "Условия ипотеки",
    review: "Отзывы наших клиентов",
    contacts: "Контакты",
    stages: "Этапы оформления ипотеки"

};


function Refinancing(props) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const advantsge = [
        {
            title: 'Низкие ставки',
            items: ['Не обязательно дожидаться закрытия первой ипотеки \n' +
            'для пересмотра процентной ставки', 'Без дополнительных сборов в период регистрации залога']
        },
        {
            title: 'Без справок',
            items: ['Можно предоставить заявку без необходимости \n' +
            'предоставления справки о текущей задолженности', 'Возможность одобрения заявки по двум документам']
        },
    ]


    const newItems = [
        {
            title: 'Требования к заёмщику',
            items: ['Возраст заёмщика от 18 до 75 лет на дату \n' +
            'погашения кредита;', 'Гражданство — Российская Федерация;', 'Ипотека оформлена 3 или более месяцев назад']
        },
        {
            title: 'Требования к недвижимости',
            items: ['Квартира в многоквартирном доме: новостройка или готовое жилье;', 'Дом с земельным участком']
        },
    ];
    const insurance = [
        {
            title: 'Оформление страхования\n' +
                'для вас бесплатно!',
            items: ['Получите обширное страхование, охватывающее риски, связанные с вашим жильем. Будь то страхование \n' +
            'от повреждений, или стихийных бедствий, \n' +
            'ваш дом будет полностью защищен;', 'Процесс получения страховки максимально упрощен. \n' +
            'Наши специалисты сделают его легким и быстрым, обеспечивая вам мгновенное покрытие']
        },

    ];
    const breadcrumb = [
        {
            label: 'Главная',  path: '/'
        },
        {
            label: 'Рефинансирование ипотеки', 
        },

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
            <div className={cn(styles.container, props.className)}>

                <Header className={styles.otherPage} showButtonContact={false} showSocial={false}
                        navbarItems={navbarItems}/>
                <Preview className={styles.preview} isIcon={false}
                         title={(<>Рефинансирование
                             ипотеки</>)}
                         textButton="Получить ипотеку "
                         image="management"
                         width="520px"

                >
                    Оптимизируйте ваш ипотечный кредит <br/> на выгодных условиях
                </Preview>
                <Scorecard items={secondary} className={styles.scorecard}/>
                <Zigzag/>
                <Heading className={`${styles.aboutTitle} ${styles.centered}`} title={sectionHeadings.conditions}/>
                <CardsList className={styles.cardsList} padding={"24px"} background items={advantsge} icon={(
                    <svg style={{minWidth: "24px", minHeight: "24px"}} width="26" height="26" viewBox="0 0 26 26"
                         fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.4193 15.802L8.72051 12.1031L6.87109 13.9525L12.4193 19.5008L21.6664 10.2537L19.817 8.4043L12.4193 15.802Z"
                            fill="#00071F"/>
                    </svg>


                )}/>

                <Conditions className={styles.conditions} items={newItems}
                            icon={<svg style={{minWidth: "16px", minHeight: "24px"}} width="16" height="24"
                                       viewBox="0 0 16 24"
                                       fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line y1="10.5" x2="16" y2="10.5" stroke="#00071F"/>
                            </svg>} image="gaid" width='566px' className={styles.conditions}/>

                <Zigzag/>
                <Form className={styles.form} title="Ваши двери в новую жизнь начинаются здесь"
                      subtitle="Готовы узнать, как получить лучшие условия для вашей ипотеки? Заполните форму для консультации и мы перезвоним вам"/>


                <Heading className={`${styles.stagesTitle} ${styles.centered}`} title={sectionHeadings.stages}/>
                <Stages data={cardStage} className={styles.stages}/>


                <Conditions className={styles.insurence} image="insurence" width='446px' items={insurance}
                            flexDirection={"row-reverse"} button={true} icon={(
                    <svg style={{minWidth: "16px", minHeight: "24px"}} width="16" height="24" viewBox="0 0 16 24"
                         fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="10.5" x2="16" y2="10.5" stroke="#00071F"/>
                    </svg>


                )}/>
                <Heading className={`${styles.reviewTitle} ${styles.centered}`} title={sectionHeadings.review}/>
                <Review data={card}/>
                <Heading className={`${styles.contactsTitle} ${styles.centered}`} title={sectionHeadings.contacts}/>
                <Contacts data={info} className={styles.contacts}/>
                <Breadcrumbs className={styles.breadcrumbs} items={breadcrumb}
                             icon={<svg className={styles.svg} style={{minWidth: "18px", minHeight: "18px"}} width="24"
                                        height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                 <path
                                     d="M7.75694 6.34292L9.17115 4.92871L16.2422 11.9998L9.17112 19.0708L7.75691 17.6566L13.4138 11.9998L7.75694 6.34292Z"
                                     fill="#666A79"/>
                             </svg>
                             }/>
                <Footer className={styles.footer} hideContentGrid={true}/>
            </div>
        </>
            </motion.div>
        </AnimatePresence>
    );
}

export default Refinancing;
