import React from 'react';
import styles from './app.module.css';
import cn from "classnames";
import Header from "./components/Header";
import Preview from "./components/Preview";
import Scorecard from "./components/Scorecard";
const navbarItems = [
    { label: 'Условия' },
    { label: 'Как получить ипотеку' },
    { label: 'Отзывы' },
    { label: 'Контакты' },

];
function App (props) {
    return (
        <>
            <div className={cn(styles.container, props.className)}>

                <Header className={styles.otherPage} showButton={false} showIcons={false} navbarItems={navbarItems} />
<Preview className={styles.preview}/>
                <Scorecard className={styles.scorecard}/>
            </div>
        </>

    );
}

export default App;
