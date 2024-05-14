import { useForm } from 'react-hook-form';
import React, {useEffect,  useRef} from 'react';
import styles from './Form.module.css';
import cn from "classnames";
import HeaderForm from "./HeaderForm";
import IMask from 'imask';

function Form(props) {
    const { onCloseModal, showCloseButton } = props;

    const { register, formState: { errors }, reset, handleSubmit, setValue } = useForm({});
    const telephoneRef = useRef();
    useEffect(() => {
        setValue('telephone');
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
    const handleCloseModal = () => {
        onCloseModal();
    };



    return (
        <>
            <div className={cn(styles.wrap, props.className)}>
                <HeaderForm className={cn(styles.header,props.className2)} title={props.title} subtitle={props.subtitle}/>
                {showCloseButton  && (
                    <button className={styles.closeButton} onClick={handleCloseModal}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="00071F" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M6.22566 4.81096C5.83514 4.42044 5.20197 4.42044 4.81145 4.81096C4.42092 5.20148 4.42092 5.83465 4.81145 6.22517L10.5862 11.9999L4.81151 17.7746C4.42098 18.1651 4.42098 18.7983 4.81151 19.1888C5.20203 19.5793 5.8352 19.5793 6.22572 19.1888L12.0004 13.4141L17.7751 19.1888C18.1656 19.5793 18.7988 19.5793 19.1893 19.1888C19.5798 18.7983 19.5798 18.1651 19.1893 17.7746L13.4146 11.9999L19.1893 6.22517C19.5799 5.83465 19.5799 5.20148 19.1893 4.81096C18.7988 4.42044 18.1657 4.42044 17.7751 4.81096L12.0004 10.5857L6.22566 4.81096Z"
                                />
                        </svg>
                    </button>
                )}
                <form className={styles.content} onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="text"
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
                        onBlur={(e) => {
                            const formattedValue = e.target.value.replace(/\D/g, '').replace(/^(\d{1})(\d{3})(\d{0,3})(\d{0,2})(\d{0,2}).*/, '+7 ($2) $3-$4-$5');
                            setValue('telephone', formattedValue, { shouldValidate: true, shouldDirty: true, shouldTouch: true });
                        }}


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