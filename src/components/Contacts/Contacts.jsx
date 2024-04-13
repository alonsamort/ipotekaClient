import React from 'react';
import styles from './Contacts.module.css';
import cn from "classnames";
import Info from "./Info";
import Address from "./Address";
function Contacts(props) {
    return (
        <>
            <div className={cn(styles.wrap, props.className)}>
              <div className={styles.info}> {props.data.map(info => <Info key={info.id} {...info} />)}</div>
                <Address className={styles.address}/>
            </div>
        </>

    );
}

export default Contacts;
