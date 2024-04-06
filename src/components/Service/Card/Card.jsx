import React from 'react';
import styles from './Card.module.css';
import cn from "classnames";
import Heading from "./Heading";
import Price from "./Price";
import Advantage from "./Advantage";
import Button from "./Button";


function Card(props) {
  return (
    <div className={cn(styles.wrap, props.className)} style={{borderRadius: props.mark && '0px 24px 24px 24px'}}>
      {props.mark && <div className={styles.mark}>{props.mark}</div>}
      < Heading {...props.heading} />
        <Price className={styles.price}{...props.price} />
      <Advantage className={styles.advantage} advantages={props.advantages} />
     <Button className={styles.button}/>
    </div>
  );
}

export default Card;
