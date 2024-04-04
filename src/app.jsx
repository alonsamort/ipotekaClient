
import './app.module.css';

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

function App() {
  return (
    <>
      <div className="container" >
          <Header className={styles.header}/>
          <Preview className={styles.preview}/>
          <Partners/>
          <Zigzag/>
          <Advantage/>
          <Zigzag/>
          <Statistic/>
          <Zigzag/>
          <Heading className={styles.aboutTitle} title="О нашей компании"/>
          <AboutCompany/>
          <Zigzag/>
          <Heading className={styles.comandTitle} title="Наша команда"/>
          <Command/>
          <Zigzag/>

      </div>

    </>
  );
}

export default App;
