import React from 'react';
import styles from './TemplateName.module.css';
function TemplateName(props) {
    return (
        <div className={styles.wrap}>{props.children}</div>
    );
}

export default TemplateName;
