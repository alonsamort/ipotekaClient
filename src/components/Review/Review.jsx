import React from 'react';
import styles from './Review.module.css';
import cn from "classnames";
import UserInfo from "./ReviewCard /UserInfo";


function Review(props) {

    return (
        <>
            <div className={cn(styles.wrap, props.className)}>
                {props.data.map(card => <UserInfo key={card.id} {...card} />)}
               
            </div>
        </>

    );
}

export default Review;
