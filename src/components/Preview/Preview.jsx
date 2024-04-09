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


            </div>
        </>

    );
}

export default Preview;
