import React from 'react';
import styles from './AboutCompany.module.css';
import cn from "classnames";
import Heading from "../Heading";
import DoubleHeading from "../DoubleHeading";
import Mark from "../Statistic/Mark";
function AboutCompany(props) {
    return (
        <>
            <div className={cn(styles.wrap, props.className)} >

                <img src={"./gift.png"} alt={"подарок"} width={"624px"} height={"536px"}/>
                <div className={styles.info}>

                    <DoubleHeading className={styles.doubleTitle}
                                   miniTitle="ВАШ ИПОТЕЧНЫЙ ПАРТНЕР"
                                   size="md"
                                   title="Ипотека здесь"/>
                    <p className={styles.descriprion}> Наша компания – это профессиональный ипотечный центр,
                        предоставляющий полный спектр услуг в сфере ипотечного кредитования и страхования недвижимости.
                        Наша цель – помочь клиентам реализовать свои жилищные мечты с минимальными затратами времени и
                        усилий. </p>
                    <div className={styles.statistics}>
                        <Mark className={styles.mark}
                              size="sm"
                              title="5 лет"
                              descriprion="Более 5 лет опыта работы"/>
                        <Mark className={styles.mark}
                              size="sm"
                              title="99,9%"
                              descriprion="Одобренных банками заявок"/>
                    </div>
                </div>
            </div>
        </>

    );
}

export default AboutCompany;
