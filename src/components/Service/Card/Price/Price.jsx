import React, { useEffect, useState } from 'react';
import styles from './Price.module.css';
import cn from 'classnames';
import DateConverter from '../../../../lib/dateConverter';

function Price(props) {
    const [day, setDay] = useState(null);
    const [month, setMonth] = useState(null);

    useEffect(() => {
        if (props.date) {
            const { day, month } = new DateConverter().format(props.date);
            setDay(day);
            setMonth(month);
        }
    }, [props.date]);

    return (
        <>
            <div className={cn(styles.wrap, props.className)} style={{ gridTemplateAreas: props.date ? `"a b" "c d"` : `"a b" "c b"` }}>
                <p className={styles.discount} style={{ gridArea: 'a' }}>{props.discount}₽</p>
                <p className={styles.percentage} style={{gridArea: 'b'}}>{props.discount > 0 ? '-' + props.percentage + '% скидка' : 'Бесплатно'}</p>
                <p className={styles.base} style={{gridArea: 'c'}}>{props.base}₽</p>
                {props.date && day && month && <p className={styles.date} style={{ gridArea: 'd' }}> до {day} {month} </p>}
            </div>
        </>
    );
}

export default Price;
