import React, {useState} from 'react';
import styles from './Card.module.css';
import cn from "classnames";
import Heading from "./Heading";
import Price from "./Price";
import Advantage from "./Advantage";
import Button from "./Button";
import Form from "../../Form";


function Card(props) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

  return (
    <div className={cn(styles.wrap, props.className)} style={{borderRadius: props.mark && '0px 24px 24px 24px'}}>
      {props.mark && <div className={styles.mark}>{props.mark}</div>}
      < Heading {...props.heading} />
        <Price className={styles.price}{...props.price} />
      <Advantage className={styles.advantage} advantages={props.advantages} />
     <Button onClick={openModal} className={styles.button}/>
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
                    title="Заказать услугу"
                    subtitle="Оставьте контактные данные в форме ниже, чтобы заказать нужную услугу"
                    className2={styles.headingForm}
                    className={styles.form}
                    showCloseButton={true}
                    onCloseModal={closeModal}
                />
            </div>
        )}
    </div>
  );
}

export default Card;
