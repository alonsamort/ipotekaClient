import React from 'react';
import styles from './Address.module.css';
import cn from "classnames";
function Address(props) {
    return (
        <>
            <div className={cn(styles.wrap, props.className)}>
                <h2 className={styles.title}>Краснодарский край,
                    г. Новороссийск,
                    ул. Кутузовская, дом 3</h2>
                <button className={styles.button}>Яндекс карты</button>
                <div className={styles.text}>
                    <p className={styles.textTitle}>Режим работы</p>
                    <span className={styles.description}>с 10:00 утра до 18:00 вечера
по предварительной записи</span>
                </div>
                <div className={styles.text}>
                    <p className={styles.textTitle}>Как добраться</p>
                    <span className={styles.description}> Встаньте напротив пешехода у второго входа
торгового центра Красной площади,
пройдите светофор. Офис находится рядом
с парикмахерской Братишка по правую сторону
</span>
                </div>
                <iframe className={styles.card}
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac310da8481d123665dc3206379af88f0d13adbb66c5ff80f76bc9beaea9e6fb7&amp;source=constructor"
                    width="585" height="520" frameBorder="0"></iframe>
            </div>
        </>

    );
}

export default Address;
