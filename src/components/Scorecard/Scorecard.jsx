import React from 'react';
import styles from './Scorecard.module.css';
import cn from "classnames";


function Scorecard(props) {
    const { items } = props;
    return (
        <>
            <div className={cn(styles.wrap, props.className)}>
                {items.map((item, index) => (
                    <div className="card" key={index}>
                        <h2 className={styles.title}>{item.title}</h2>
                        <p className={styles.subtitle}>{item.subtitle}</p>
                    </div>
                ))}
            </div>
        </>

    );
}

export default Scorecard;
