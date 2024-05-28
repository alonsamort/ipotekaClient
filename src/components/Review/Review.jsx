import React from 'react';
import styles from './Review.module.css';
import cn from "classnames";
import UserInfo from "./UserInfo";
import Heading from "../Heading";


function Review(props) {

    return (
        <>
            <div  id="review" className={cn(styles.wrap, props.className)}>

                <Heading className={`${styles.reviewTitle} ${styles.centered}`} title="Отзывы наших клиентов"/>
<div className={styles.reviews}>{props.data.map(card => (
    <UserInfo key={card.id} heading={card.heading} review={card.review} />
))}</div>


               
            </div>
        </>

    );
}

export default Review;
