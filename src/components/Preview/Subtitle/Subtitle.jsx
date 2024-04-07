import React from 'react';
import styles from './Subtitle.module.css';
import cn from "classnames";
function Subtitle(props) {
    return (
        <>
            <div className={cn(styles.wrap, props.className)}>
                Откройте двери своего нового дома<br/>
                с нашим ипотечным центром
            </div>
        </>

    );
}

export default Subtitle;
