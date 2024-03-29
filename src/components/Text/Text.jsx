import React from 'react';
import styles from './Text.module.css';
import cn from "classnames";
import Title from "../Preview/Title";
import Subtitle from "../Preview/Subtitle";
import Button from "../Preview/Button";
function Text(props) {
    return (
        <>
            <div className={cn(styles.wrap, props.className)}>
                <div className={styles.text}>
                    <Title className={styles.title}></Title>
                    <Subtitle className={styles.subtitle} ></Subtitle>
                </div>
                <Button className={styles.button}></Button>
            </div>
        </>

    );
}

export default Text;
