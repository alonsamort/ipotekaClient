import React from 'react';
import styles from './Review.module.css';
import cn from "classnames";
import UserInfo from "./UserInfo";


function Review(props) {

    return (
        <>
            <div className={cn(styles.wrap, props.className)}>

                {props.data.map(card => (
                    <UserInfo key={card.id} heading={card.heading} review={card.review} />
                ))}

               
            </div>
        </>

    );
}

export default Review;
