

import styles from './Mark.module.css';
import cn from "classnames";

function Mark(props) {
    return (

        <>
            <div className={cn(styles.wrap, props.className)}>
                <h2 className={cn({[styles.title]: props.size === "md", [styles.titleSm]: props.size === "sm"})}>
                    {[props.title]}
                </h2>

                <p className={styles.descriprion}>{[props.descriprion]}</p>
            </div>
        </>

    );
}

export default Mark;
