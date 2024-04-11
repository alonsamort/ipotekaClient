import { useForm } from 'react-hook-form';
import React, { useEffect } from 'react'; // Импортировать useEffect из React
import styles from './Form.module.css';
import cn from "classnames";
import Header from "./Header";

function Form(props) {
    const { register, formState: { errors }, reset, handleSubmit, trigger, setValue } = useForm({ // Добавить setValue и trigger в деструктуризацию
        mode: "onBlur"
    });

    useEffect(() => {
        setValue('telephone', );
    }, [register, setValue]);

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        reset();
    };

    return (
        <>
            <div className={cn(styles.wrap, props.className)}>
                <Header className={styles.header} title="Плохая кредитная история, отказали несколько банков, или нет первого взноса?" subtitle="Не беспокойтесь! Наши специалисты успешно решают сложные ситуации с ипотекой в любом регионе России. Работаем до положительного решения банка. Заполните форму, и вам окажут помощь в решении всех вопросов!" />
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="tel"
                        className={`${styles.inputName} ${errors.firstName ? styles.errorInput : ''}`}
                        {...register('firstName', {
                            required: "Поле необходимо заполнить",
                            pattern: {
                                value: /^[А-Яа-яЁё]+$/,
                                message: "Поле должно содержать только русские буквы"
                            },
                            minLength: {
                                value: 3,
                                message: "Поле слишком короткое"
                            }
                        })}
                        placeholder="Имя"
                        onBlur={() => trigger('firstName')} // Добавить trigger для проверки при потере фокуса
                    />
                    {errors.firstName && (
                        <div className={styles.error}>
                            {errors.firstName.message}
                        </div>
                    )}
                    <input
                        type="tel"
                        className={`${styles.inputPhone} ${errors.telephone ? styles.errorInput : ''}`}
                        {...register('telephone', {
                            required: "Поле необходимо заполнить",
                            pattern: {
                                value: /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,

                            }
                        })}
                        placeholder="+7 (___) ___-__-__"
                        onInput={(e) => {
                            e.target.value = e.target.value.replace(/\D/g, '').replace(/^(\d{1})(\d{3})(\d{0,3})(\d{0,2})(\d{0,2}).*/, '+7 ($2) $3-$4-$5');
                        }}
                        onBlur={() => trigger('telephone')} // Добавить trigger для проверки при потере фокуса
                    />
                    {errors.telephone && (
                        <div className={styles.error}>
                            {errors.telephone.message}
                        </div>
                    )}
                    <input className={styles.button} type="submit"/>
                   <p className={styles.personalInfo}>Нажимая на кнопку, я даю согласие на <a href="#">обработку своих персональных данных</a></p>
                </form>
            </div>
        </>
    );
}

export default Form;