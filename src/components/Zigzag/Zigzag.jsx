import React from 'react';
import styles from './Zigzag.module.css';
import cn from "classnames";
function Zigzag(props) {
    return (
        <>
            <div className={cn(styles.wrap, props.className)}>
                <svg width="102" height="24" viewBox="0 0 102 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M3 3C11.0047 3 11.0047 21 19.0094 21C27.0141 21 27.0141 3 35.0189 3C43.0236 3 43.0236 21 51.0095 21C59.0145 21 59.0145 3 67.0002 3C75.0051 3 75.0051 21 82.9908 21C90.9957 21 90.9957 3 99 3"
                        stroke="url(#paint0_linear_1421_5225)" stroke-width="5.68421" stroke-miterlimit="10"
                        stroke-linecap="round"/>
                    <defs>
                        <linearGradient id="paint0_linear_1421_5225" x1="7.87869" y1="19.9615" x2="96.2166" y2="9.027"
                                        gradientUnits="userSpaceOnUse">
                            <stop stop-color="#0057FF"/>
                            <stop offset="1" stop-color="#00C2FF"/>
                        </linearGradient>
                    </defs>
                </svg>

            </div>
        </>

    );
}

export default Zigzag;
