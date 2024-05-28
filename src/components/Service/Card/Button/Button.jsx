import React from 'react';
import styles from './Button.module.css';
import cn from "classnames";

function Button(props) {
    return (
        <>

                <button className={cn(styles.button, props.className)}
                        onClick={props.onClick}
                >
                    Заказать услугу



                </button>

        </>

    );
}

export default Button;
