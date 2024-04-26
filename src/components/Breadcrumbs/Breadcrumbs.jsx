import React from 'react';
import styles from './Breadcrumbs.module.css';
import cn from "classnames";
import Item from "./Item";
function Breadcrumbs(props) {
    const { items} = props;
    return (
        <>
            <div className={cn(styles.wrap, props.className)}>
                <Item icon={props.icon} className={styles.item} items={items}/>
            </div>
        </>

    );
}

export default Breadcrumbs;
