import React from 'react';
import styles from './Text.module.css';
import cn from "classnames";
import Title from "../Title";
import Subtitle from "../Subtitle";
import Button from "../Button";



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
