import React from 'react';
import styles from './Scorecard.module.css';
import cn from "classnames";

const items = [
    { title: 'от 5%', subtitle: 'Ипотечная ставка' },
    { title: '30 лет', subtitle: 'Срок кредита' },
    { title: '300 тыс.', subtitle: 'Мин. сумма кредита' },
    { title: '12 млн', subtitle: 'Макс. сумма кредита' },
];
function Scorecard(props) {
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
