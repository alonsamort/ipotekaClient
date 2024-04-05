import React from 'react';
import styles from './Card.module.css';
import cn from "classnames";


function Card(props) {
  return (
    <div className={cn(styles.wrap, props.className)}>
      {props.mark && <div className={styles.mark}>{props.mark}</div>}
      <div className="heding">
        <h3>{props.heding.title}</h3>
        <p>{props.heding.subtitle}</p>
      </div>
      <div className="price" style={{ display: 'grid', alignItems: 'center', gridTemplateAreas: props.price.date ? `"a b" "c d"` : `"a b" "c b"` }}>
        <p style={{ gridArea: 'a' }}>{props.price.discount}Р</p>
        <p style={{ gridArea: 'b' }}>{props.price.percentage}%</p>
        <p style={{ gridArea: 'c' }}>{props.price.base}Р</p>
        {props.price.date && <p style={{ gridArea: 'd' }}>{props.price.date.toLocaleDateString()}</p>}
      </div>
      <div className="advantages">
        {props.advantages.map((advantage, index) => {
          return (
            <div key={index} className="item">
              <div className="icon">+</div>
              <p className="text">{advantage}</p>
            </div>
          )
        })}
      </div>
      <button type="button">Заказать услугу</button>
    </div>
  );
}

export default Card;
