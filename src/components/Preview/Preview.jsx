import React from 'react';
import styles from './Preview.module.css';
import cn from "classnames";
import Text from "../Text/Text";
import Spiner from "./Spiner";

function Preview(props) {
    return (
        <>
            <div className={cn(styles.wrap, props.className)}>
<Spiner/>
                <Text className={styles.text}></Text>

                <img src={"./Cards.png"} alt={"карточки домов"} width={"566px"} height={"457px"}/>
            </div>
        </>

    );
}

export default Preview;
