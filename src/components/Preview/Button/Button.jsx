import React from 'react';
import styles from './Button.module.css';
import cn from "classnames";

function Button(props) {
    return (
        <>
            <button className={cn(styles.wrap, props.className)}>
                Получить консультацию
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M3.67127 11.0002V13.0002L16.4996 13.0002L13.2571 16.2428L14.6713 17.657L20.3281 12.0001L14.6713 6.34326L13.2571 7.75747L16.4998 11.0002L3.67127 11.0002Z"
                    />
                </svg>

            </button>
        </>

    );
}

export default Button;
