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

const FAQHomeData = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
  {
    userId: 1,
    id: 4,
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
  },
  {
    userId: 1,
    id: 5,
    title: "nesciunt quas odio",
    body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
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
        <Programs />
        <Faq data={FAQHomeData} className={styles.faq} />
      </div>
    </>
  );
}

export default App;
