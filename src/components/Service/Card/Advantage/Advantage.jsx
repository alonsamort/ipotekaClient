import React from 'react';
import styles from './Advantage.module.css';
import cn from "classnames";
function Advantage(props) {
    return (
        <>
            <div className={cn(styles.wrap, props.className)}>
                {props.advantages.map((advantage, index) => {
                    return (
                        <div key={index} className={styles.item}>
                            <div className="icon">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" stroke="url(#paint0_linear_733_2706)"/>
                                <path d="M8 12.8125L15.0625 5.71875L16 6.65625L8 14.6562L4.28125 10.9375L5.1875 10L8 12.8125Z" fill="url(#paint1_linear_733_2706)"/>
                                <defs>
                                    <linearGradient id="paint0_linear_733_2706" x1="1.01639" y1="18.8462" x2="19.692" y2="18.4127" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#0057FF"/>
                                        <stop offset="1" stop-color="#00C2FF"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_733_2706" x1="2.81311" y1="21.5" x2="17.7586" y2="21.2865" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#0057FF"/>
                                        <stop offset="1" stop-color="#00C2FF"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                            </div>
                            <p className={styles.text}>{advantage}</p>
                        </div>
                    )
                })}
            </div>
        </>

    );
}

export default Advantage;
