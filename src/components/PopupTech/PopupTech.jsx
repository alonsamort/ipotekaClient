import React from 'react';
import styles from './PopupTech.module.css';
import cn from "classnames";
import Button from "../Preview/Button";
import { useNavigate } from 'react-router-dom'; // Импорт навигации

function PopupTech(props) {
    const navigate = useNavigate(); // Хук для навигации

    return (
        <>
            <div className={cn(styles.container, props.className)}>
                <img src={props.imageUrl} alt="грустный смайлик" width="100px" height="100px"/>
                <h2 className={styles.title}>{props.title}</h2>
                <p className={styles.text}>{props.text}</p>
                <Button
                    className={styles.button}
                    showIcon={false}
                    gradient="linear-gradient(265.89deg, #F9B12C 0.13%, #F20438 83.63%)"
                    hoverGradient="linear-gradient(265.89deg, #FFC559 0.13%, #EB234E 83.63%)"
                    onClick={() => navigate('/')}
                >
                    {props.textButton}
                </Button>
            </div>
        </>
    );
}

export default PopupTech;