import React, {useEffect} from "react";
import styles from './build.module.css';
import cn from "classnames";
import Header from "./components/Header";
import Preview from "./components/Preview";
import Scorecard from "./components/Scorecard";
import Zigzag from "./components/Zigzag";
import Heading from "./components/Heading";
import {advantsgeItems, CardsList} from "./components/Cards/Cards";
import Conditions from "./components/Conditions";
import Form from "./components/Form";
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
    {title: 'от 6%', subtitle: 'Ипотечная ставка'},
    {title: '30 лет', subtitle: 'Срок кредита'},
    {title: '300 тыс.', subtitle: 'Мин. сумма кредита'},
    {title: '100 млн', subtitle: 'Макс. сумма кредита'},
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


function Build(props) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const advantsge = [
        {
            title: 'Стройте по-своему',
            items: ['Постройте дом на своём или арендованном участке', 'Постройте с аккредитованным подрядчиком']
        },
        {
            title: 'На срок от 1 года до 30 лет',
            items: ['Срок кредита — от года до 30 лет', 'Первоначальный взнос от 20,1%']
        },
    ]


    const newItems = [
        {
            title: 'Требования к заёмщику',
            items: ['Возраст заёмщика от 18 до 75 лет на дату \n' +
            'погашения кредита;', 'Гражданство — Российская Федерация;']
        },
        {
            title: 'Требования к недвижимости',
            items: ['Дом должен быть построен в течении 1-го года;', 'Участок должен подходить под условия ипотеки;', 'Оценка дома по окончании строительства должна соответсвовать проекту и смете']
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
            label: 'Главная', path: '/'
        },
         {
            label: 'Ипотека на строительство дома', link: '#aboutBlock'
        },

    ];
    const reviews = [
        {
            id: 1,
            heading: {
                avatar: "/womenF.jpg",
                FLName: "Кира Золотарева",
            },
            review: {
                comment: "Хочу выразить свою искреннюю благодарность ипотечным брокерам за их профессионализм и отличное обслуживание, с самого начала процесса они проявили высочайший уровень знаний и умений, которые существенно помогли нам в поиске и оформлении наилучших ипотечных условий. Благодаря их внимательности и ответственному подходу, мы чувствовали себя уверенно на каждом этапе. "
            }
        },
        {
            id: 2,
            heading: {
                avatar: "/man.jpg",
                FLName: "Арсений Кондратьев",
            },
            review: {
                comment: "Очень доволен работой компании \n" +
                    "по ипотеке. Специалисты предоставили мне исчерпывающую информацию о различных ипотечных продуктах, и помогли найти оптимальный вариант, который идеально соответствовал моим финансовым возможностям и жилищным потребностям. Сотрудники компании были предельно внимательны и терпеливы, детально разъясняя все нюансы и условия договора. Особенно хочу отметить их готовность всегда идти на контакт и оперативность в решении всех возникающих вопросов. Эффективность и клиентоориентированность команды оставили самые приятные воспоминания о сотрудничестве"
            }
        },
        {
            id: 3,
            heading: {
                avatar: "/womensha.jpg",
                FLName: "София Ермакова",
            },
            review: {
                comment: "Профессиональные и отзывчивые ипотечные брокеры! Они помогли мне с выбором ипотечной программы, нашли выгодные условия и провели через весь процесс без проблем. Очень довольна результатом! Рекомендую!"
            }
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
                    <div className="container">

                        <Header className={styles.otherPage} showButtonContact={false} showSocial={false}
                                navbarItems={navbarItems}/>
                        <Preview className={styles.preview} isIcon={false}
                                 title={(<>Ипотека на строительство дома</>)}
                                 textButton="Получить ипотеку "
                                 image="brick"
                                 width="420px"

                        >
                            Стройте свой дом с уверенностью. Ипотека
                            на<br/> строительство – ваш путь к собственному уголку!
                        </Preview>
                        <Scorecard items={secondary} className={styles.scorecard}/>
                        <Zigzag/>
                        <Heading className={`${styles.aboutTitle} ${styles.centered}`}
                                 title={sectionHeadings.conditions}/>
                        <CardsList className={styles.cardsList} padding={"24px"} background items={advantsge} icon={(
                            <svg style={{minWidth: "24px", minHeight: "24px"}} width="26" height="26"
                                 viewBox="0 0 26 26"
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
                                    </svg>} image="wall" width='566px' className={styles.conditions}/>

                        <Zigzag/>
                        <Form className={styles.form} title="Начнем строительство вашего дома вместе!"
                              subtitle="Оставьте нам свои контактные данные, и мы разработаем ипотечный план, идеально подходящий для строительства вашего дома"/>


                        <Heading className={`${styles.stagesTitle} ${styles.centered}`} title={sectionHeadings.stages}/>
                    </div>
                    <Stages data={cardStage} className={styles.stages}/>

                    <div className="container">
                        <Conditions className={styles.insurence} image="insurence" width='446px' items={insurance}
                                    flexDirection={"row-reverse"} button={true} icon={(
                            <svg style={{minWidth: "16px", minHeight: "24px"}} width="16" height="24"
                                 viewBox="0 0 16 24"
                                 fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line y1="10.5" x2="16" y2="10.5" stroke="#00071F"/>
                            </svg>


                        )}/>

                        <Review className={styles.review} data={reviews}/>
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
                        <Footer className={styles.footer} hideContentGrid={true}/>
                    </div>
                </>
            </motion.div>
        </AnimatePresence>
    );
}

export default Build;
