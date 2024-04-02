
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

function App() {
  return (
    <>
      <div className="container" >
          <Header className={styles.header}/>
          <Preview className={styles.preview}/>
          <Partners/>
          <Zigzag/>
          <Advantage/>
      </div>

    </>
  );
}

export default App;
