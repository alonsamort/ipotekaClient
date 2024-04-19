import React from 'react';
import styles from './Preview.module.css';
import cn from "classnames";
import Text from "../Text/Text";

import Images from "./Images";

function Preview(props) {
    return (
        <>
            <div className={cn(styles.wrap, props.className)}>

                <Text className={styles.text}></Text>
                <Images/>
                <img
                    className={styles.check}
                    src={"./check.png"} alt={"картинка галочки"}/>
                <img
                    className={styles.home}
                    src={"./home.png"} alt={"картинка дома"}/>
                <img
                    className={styles.moeda}
                    src={"./moeda.png"} alt={"картинка монетки"}/>
                <img
                    className={styles.blueBall}
                    src={"./blueBall.png"} alt={"картинка голубого шарика"}/>
                <img
                    className={styles.orangeBall}
                    src={"./orangeBall.png"} alt={"картинка желтого шарика"}/>

            </div>
        </>

    );
}

export default Preview;
