import { useForm } from 'react-hook-form';
import React, {useEffect, useRef} from 'react';
import styles from './Form.module.css';
import cn from "classnames";
import Header from "./Header";
import IMask from 'imask';

function Form(props) {
    const { register, formState: { errors }, reset, handleSubmit, trigger, setValue } = useForm({});
    const telephoneRef = useRef(null);
    useEffect(() => {
        setValue('telephone', '');
    }, [setValue]);

    useEffect(() => {
        const mask = IMask(telephoneRef.current, {
            mask: '+7 (000) 000-00-00',
            lazy:false
        });
        return () => {
            mask.destroy();
        };
    }, []);


    useEffect(() => {
        setValue('telephone', '');
    }, [setValue]);

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        reset();
    };

    return (
        <>
            <div className={cn(styles.wrap, props.className)}>
                <Header className={styles.header} title={props.title} subtitle={props.subtitle}/>
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
                                message: "Введите корректный номер телефона в формате +7 (XXX) XXX-XX-XX"
                            }
                        })}
                        placeholder="+7 (999) 999-99-99"
                        ref={telephoneRef}


                    />
                    {errors.telephone && (
                        <div className={styles.error}>
                            {errors.telephone.message}
                        </div>
                    )}
                    <input className={styles.button} type="submit"/>
                    <p className={styles.personalInfo}>Нажимая на кнопку, я даю согласие на <a href="#">обработку своих
                        персональных данных</a></p>
                </form>

            </div>
        </>
    );
}

export default Form;