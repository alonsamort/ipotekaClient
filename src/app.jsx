import "./app.module.css";


import Header from "./components/Header";
import styles from "./app.module.css";
import Preview from "./components/Preview";
import Partners from "./components/Partners";
import Zigzag from "./components/Zigzag";
import Advantage from "./components/Advantage";
import Statistic from "./components/Statistic";

import AboutCompany from "./components/AboutCompany";
import Heading from "./components/Heading";
import React from "react";
import Command from "./components/Command";
import Programs from "./components/Programs";
import Faq from "./components/FAQ";
import Service from "./components/Service";
import { cards } from "./components/Service/data";
import Stages from "./components/Stages";
import {cards as cardStage} from "./components/Stages/data"



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
  advantage:"Почему обращаются к нам",
  about: "О нашей компании",
  team: "Наша команда",
  faq: "Часто задаваемые вопросы",
  services: "Услуги",
  stages: "Этапы оформления ипотеки ",
};

function App() {
  return (
    <>
      <div className="container">
        <Header className={styles.header} />
        <Preview className={styles.preview} />
        <Partners />
        <Zigzag />
        <Heading className={`${styles.advantageTitle} ${styles.centered}`} title={sectionHeadings.advantage} />
        <Advantage />
        <Zigzag />
        <Statistic />
        <Zigzag />
        <Heading className={`${styles.aboutTitle} ${styles.centered}`} title={sectionHeadings.about} />
        <AboutCompany />
        <Zigzag />
        <Heading className={`${styles.comandTitle} ${styles.centered}`} title={sectionHeadings.team} />
        <Command />
        <Zigzag />
        <Heading className={`${styles.faqTitle} ${styles.centered}`} title={sectionHeadings.faq} />
        <Faq data={FAQHomeData} className={styles.faq} />
        <Programs />
        <Heading className={`${styles.serviceTitle} ${styles.centered}`} title={sectionHeadings.services} />
        <Service data={cards} className={styles.service} />
        <Zigzag />
        <Heading className={`${styles.stagesTitle} ${styles.centered}`} title={sectionHeadings.stages} />
        <Stages data={cardStage} className={styles.stages}/>
      </div>
    </>
  );
}

export default App;
