import {useForm} from 'react-hook-form'
import React from 'react';
import styles from './Form.module.css';
import cn from "classnames";
import Header from "./Header";


function Form(props) {
    const { register,
        formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };

    return (
        <>
        <div className={cn(styles.wrap, props.className)}>

            <Header className={styles.header} title="Плохая кредитная история, отказали несколько банков,
или нет первого взноса?"
                    subtitle="Не беспокойтесь! Наши специалисты успешно решают сложные ситуации с ипотекой в любом регионе России. Работаем до положительного решения банка. Заполните форму, и вам окажут помощь в решении всех вопросов!"/>


            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <input type="tel" className={`${styles.inputName} ${errors.firstName ? styles.errorInput : ''}`}
                       {...register('firstName', { required: "Поле необходимо заполнить", minLength: {
                               value: 3,
                               message: "Поле слишком короткое"
                           }   })}

                       placeholder="Имя"/>
                {errors.firstName && <div className={styles.error}>Поле необходимо заполнить</div>}
                <input type="tel" className={`${styles.inputPhone} ${errors.telephone ? styles.errorInput : ''}`}
                       {...register('telephone', { required: true })}
                       placeholder="+7 (999) 999-99-99"/>
                {errors.firstName && <div className={styles.error}>Поле необходимо заполнить</div>}
                <input className={styles.button} type="submit"/>


            </form>
        </div>
        </>

    )
        ;
}

export default Form;
