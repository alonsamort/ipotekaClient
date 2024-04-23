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
                    <Title className={styles.title}>{props.title}</Title>
                    <Subtitle className={styles.subtitle} >{props.children}</Subtitle>
                </div>
                <Button className={styles.button}>{props.textButton}</Button>
            </div>
        </>

    );
}

export default Text;
