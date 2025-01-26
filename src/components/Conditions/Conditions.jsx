import React, { useState } from 'react';
import styles from './Conditions.module.css';
import cn from "classnames";
import { CardsList } from "../Cards/Cards";
import Button from "../Preview/Button";
import Form from "../Form";


export const defaultItems = [
    {
        title: 'Требования к заёмщику',
        items: [
            'Заёмщик — гражданин Российской Федерации',
            'Возраст заёмщика от 18 до 75 лет (параметр определяется банком);',
            'Без ранее выданной льготной ипотеки с 23.12.2023',
            'Если квартира от застройщика, ребенку должно быть до 7-ми лет;',
            'Если покупается дом либо ИЖС, то один ребенок до 7-ми лет, либо двое несовершеннолетних'
        ]
    },
    {
        title: 'Требования к недвижимости',
        items: [
            'Покупка квартиры или дома у застройщика',
            'Сделка по договору долевого участия',
            'Строительство жилого дома'
        ]
    },
];

function Conditions(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [items, setItems] = useState(props.items || defaultItems);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div id="conditions" className={cn(styles.wrap, props.className)} style={{flexDirection: props.flexDirection}}>
                <div className={styles.info}>
                    <CardsList className={styles.cardsList} items={items} icon={props.icon} />
                    {props.button && (
                        <Button onClick={openModal} className={styles.button} showIcon={false}  gradient="linear-gradient(88.67deg, #0057FF 5.1%, #00C2FF 96.41%)"
                                hoverGradient="linear-gradient(88.67deg, #3379FF 5.1%, #33CEFF 96.41%)" >
                          Получить страхование
                        </Button>
                    )}
                    {isModalOpen && (
                        <div
                            style={{
                                position: 'fixed',
                                background: 'rgba(0,0,0, 0.2)',
                                zIndex: 1,
                                width: '100vw',
                                height: '100vh',
                                top: '0',
                                left: '0',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <Form
                                title="Получите страхование"
                                subtitle="Заполните форму ниже, наши специалисты свяжутся с вами для уточнения деталей"
                                className2={styles.headingForm}
                                className={styles.form}
                                showCloseButton={true}
                                onCloseModal={closeModal}
                            />
                        </div>
                    )}
                </div>
                <img className={styles.cards} src={`./${props.image}.png`} alt={"карточки"} width={props.width} />
            </div>
        </>
    );
}

export default Conditions;