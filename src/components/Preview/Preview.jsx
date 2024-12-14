import React from 'react';
import styles from './Preview.module.css';
import cn from "classnames";
import Text from "./Text/Text";

import Images from "./Images";
import Spiner from "./Images/Spiner";

function Preview(props) {
    return (
        <>
            <div className={cn(styles.wrap, props.className)}>

                <Text className={styles.text} title={props.title} textButton={props.textButton}>{props.children}</Text>
                {props.isIcon && (
                    <div style={{width:"0px"}}>
                        <Spiner className={styles.spinner}/>
                    </div>
                )}
                <Images className={styles.images} image={props.image} width="566px"/>
                {
                    props.isIcon && (
                        <>

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
                        </>
                    )
                }


            </div>
        </>

    );
}

export default Preview;
