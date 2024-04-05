import "./app.module.css";

import ButtonContact from "./components/Header/ButtonContact";
import Navbar from "./components/Header/Navbar";
import Social from "./components/Header/Social";
import Logo from "./components/Header/Logo";
import Header from "./components/Header";
import styles from "./app.module.css";
import Preview from "./components/Preview";
import Partners from "./components/Partners";
import Zigzag from "./components/Zigzag";
import Advantage from "./components/Advantage";
import Statistic from "./components/Statistic";
import Mark from "./components/Statistic/Mark";
import AboutCompany from "./components/AboutCompany";
import Heading from "./components/Heading";
import React from "react";
import Command from "./components/Command";
import Programs from "./components/Programs";
import Faq from "./components/FAQ";
import Service from "./components/Service";
import { cards } from "./components/Service/data";

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

function App() {
  return (
    <>
      <div className="container">
        <Header className={styles.header} />
        <Preview className={styles.preview} />
        <Partners />
        <Zigzag />
        <Advantage />
        <Zigzag />
        <Statistic />
        <Zigzag />
        <Heading className={styles.aboutTitle} title="О нашей компании" />
        <AboutCompany />
        <Zigzag />
        <Heading className={styles.comandTitle} title="Наша команда" />
        <Command />
        <Zigzag />
        <Heading className={styles.comandTitle} title="Часто задаваемые вопросы" />
        <Faq data={FAQHomeData} className={styles.faq} />
        <Programs />
        <Service data={cards} className={styles.service} />
      </div>
    </>
  );
}

export default App;
