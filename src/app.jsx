
import './app.module.css';

import ButtonContact from "./components/Header/ButtonContact";
import Navbar from "./components/Header/Navbar";
import Social from "./components/Header/Social";
import Logo from "./components/Header/Logo";
import Header from "./components/Header";
import styles from "./components/Header/Header.module.css";
import Preview from "./components/Preview";
import Partners from "./components/Partners";

function App() {
  return (
    <>
      <div className="container" >
          <Header/>
          <Preview/>
          <Partners/>
      </div>

    </>
  );
}

export default App;
