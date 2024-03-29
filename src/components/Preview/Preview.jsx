import React from 'react';
import styles from './Preview.module.css';
import cn from "classnames";
import Text from "../Text/Text";
import myImage from './images/decorElementCards.png'

function Preview(props) {
    return (
        <>
            <div className={cn(styles.wrap, props.className)}>

                <Text className={styles.text}></Text>

                <img src={myImage} alt={"карточки домов"}/>
            </div>
        </>

    );
}

export default Preview;
