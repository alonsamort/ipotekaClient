import React from 'react';
import styles from './Button.module.css';
import cn from "classnames";
import {motion} from "framer-motion";
function Button(props) {
    return (
        <>

                <motion.button className={cn(styles.button, props.className)}
                               whileHover={{scale: 1.1}}
                               transition={{type: 'spring', stiffness: 400, damping: 10}}
                >
                    Заказать услугу



                </motion.button>

        </>

    );
}

export default Button;
