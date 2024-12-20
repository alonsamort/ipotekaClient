import Header from "./components/Header";
import styles from "./home.module.css";
import Preview from "./components/Preview";
import Partners from "./components/Partners";
import Zigzag from "./components/Zigzag";
import Advantage from "./components/Advantage";
import Statistic from "./components/Statistic";

import AboutCompany from "./components/AboutCompany";
import Heading from "./components/Heading";
import React, {useEffect,useRef} from "react";
import Command from "./components/Command";
import Programs from "./components/Programs";
import Faq from "./components/FAQ";
import Service from "./components/Service";
import {cards} from "./components/Service/data";
import Stages from "./components/Stages";
import {cards as cardStage} from "./components/Stages/data"
import Form from "./components/Form";
import Review from "./components/Review";

import Contacts from "./components/Contacts";
import {info} from "./components/Contacts/data"
import Footer from "./components/Footer";
import {footer} from "./components/Footer/data"
import {motion, AnimatePresence} from 'framer-motion';
import cn from 'classnames'




const FAQHomeData = [
    {
        userId: 1,
        id: 1,
        title:
            "Что такое ипотека и как она работает?",
        body: "Ипотека - это вид кредита, предоставляемого на покупку недвижимости. Вы получаете ссуду под залог жилья,и\nплатите  её по частям в течение определенного срока.\n",

    },
    {
        userId: 1,
        id: 2,
        title: "Что такое первоначальный взнос и как его рассчитать?",
        body: "Первоначальный взнос - это сумма, которую вы оплачиваете при покупке недвижимости. Его размер обычно составляет от 10% \n" +
            "до 30% от стоимости недвижимости.",
    },
    {
        userId: 1,
        id: 3,
        title: "Могу ли я досрочно погасить ипотеку?",
        body: "Да, многие ипотечные кредиты позволяют досрочное \n" +
            "погашение без штрафов.",
    },
    {
        userId: 1,
        id: 4,
        title: "Какие документы понадобятся для \n" +
            "получения ипотеки?",
        body: "Обычно требуются паспорт, справка о доходах, выписка из трудовой книжки, и документы на приобретаемое жилье.",
    },
    {
        userId: 1,
        id: 5,
        title: "Какую роль играет кредитная\n" +
            "история в процессе получения ипотеки?",
        body: "Банки и кредиторы оценивают вашу кредитную историю, чтобы определить вашу кредитоспособность. Если у вас хорошая кредитная история, шансы на одобрение кредита выше. Обратно, плохая кредитная история может привести к отказу или к высоким процентным ставкам. \n" +
            "Важно следить за состоянием своей кредитной истории \n" +
            "и принимать меры для ее улучшения, если это необходимо, до того, как подавать заявку на ипотеку. Заранее получите копии своего кредитного отчета, проверьте его на ошибки\n" +
            "и своевременно исправляйте возможные проблемы. \n" +
            "Это поможет вам получить более выгодные условия ипотечного кредита.",
    },
];
const sectionHeadings = {
    advantage: "Почему к нам обращаются",
    team: "Наша команда",
    faq: "Часто задаваемые вопросы",
    stages: "Этапы оформления ипотеки ",
    review: "Отзывы наших клиентов",
    contacts: "Контакты"
};
const navbarItems = [
    {label: 'О нас', sectionId: 'about'},
    {label: 'Услуги', sectionId: 'service'},
    {label: 'Отзывы', sectionId: 'review'},
    {label: 'Контакты', sectionId: 'contacts'},

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

function Home(props) {




 useEffect(() => {
     window.scrollTo(0, 0);
 }, []);

 return (
     <AnimatePresence>
         <motion.div
             initial={{opacity: 0, y: 20}}
             animate={{opacity: 1, y: 0}}
             exit={{opacity: 0, y: -20}}
             transition={{duration: 0.3}}
             className={cn(styles.container, props.className)}
         >
             <>
                 <div className="container">
                     <Header className={styles.header} showButtonContact={true} showSocial={true}
                             navbarItems={navbarItems} />
                     <Preview className={styles.preview} title={(<>Ипотека здесь: <br/>
                         Дом мечты-<br/>
                         Это реально</>)}
                              textButton="Получить консультацию"
                              image="Cards"
                               isIcon={true}>
                         Откройте двери своего нового дома <br/>
                         с нашим ипотечным центром
                     </Preview>
                     <Partners/>
                     <Zigzag/>
                     <Heading className={`${styles.advantageTitle} ${styles.centered}`}
                              title={sectionHeadings.advantage}/>
                     <Advantage/>
                     <Zigzag/>
                     <Statistic/>
                     <Zigzag/>
                     <AboutCompany></AboutCompany>
                     <Zigzag/>
                     <Command/>
                     <Zigzag/>
                     <Heading className={`${styles.faqTitle} ${styles.centered}`} title={sectionHeadings.faq}/>
                     <Faq data={FAQHomeData} className={styles.faq}/>
                     <Programs />
                     <Service data={cards} className={styles.service}/>
                     <Zigzag/>
                     <Heading className={`${styles.stagesTitle} ${styles.centered}`} title={sectionHeadings.stages}/></div>
                 <Stages data={cardStage} className={styles.stages}/>
                 <div className="container">
                     <Form className={styles.form} title="Плохая кредитная история, отказали несколько банков,
или нет первого взноса?"
                           subtitle="Не беспокойтесь! Наши специалисты успешно решают сложные ситуации с ипотекой в любом регионе России. Работаем до положительного решения банка. Заполните форму, и вам окажут помощь в решении всех вопросов!"/>
                     <Review className={styles.review} data={reviews}/>
                     <Contacts data={info} className={styles.contacts}/>
                     <Zigzag/>
                     <Form
                         title="Заявка на бесплатную консультацию"
                         subtitle="Не откладывайте решение вопросов на потом.
Заполните форму ниже, и наши специалисты вам перезвонят!"
                         className2={styles.consultationForm} className={styles.consultation} showCloseButton={false}>
                     </Form>
                     <Footer data={footer} className={styles.footer}/>
                 </div>
             </>
         </motion.div>
     </AnimatePresence>
 );
}

export default Home;
