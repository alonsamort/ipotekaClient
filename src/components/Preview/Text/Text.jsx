import React, { useState } from 'react';
import styles from './Text.module.css';
import cn from 'classnames';
import Title from '../Title';
import Subtitle from '../Subtitle';
import Button from '../Button';
import Form from '../../Form';

function Text(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className={cn(styles.wrap, props.className)}>
                <div className={styles.text}>
                    <Title className={styles.title}>{props.title}</Title>
                    <Subtitle className={styles.subtitle}>{props.children}</Subtitle>
                </div>
                <Button onClick={openModal} className={styles.button}>
                    {props.textButton}
                </Button>
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
                            title="Заявка на бесплатную консултацию"
                            subtitle="Заполните форму ниже, и наш специалист свяжется с вами для уточнения всех необходимых деталей"
                            className2={styles.headingForm}
                            className={styles.form}
                            showCloseButton={true}
                            onCloseModal={closeModal}
                        />
                    </div>
                )}
            </div>
        </>
    );
}

export default Text;