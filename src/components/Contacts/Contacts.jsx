import React from 'react';
import styles from './Contacts.module.css';
import cn from "classnames";
import Info from "./Info";
import Address from "./Address";
import Heading from "../Heading";
function Contacts(props) {
    return (
        <>
            <div id="contacts" className={cn(styles.wrap, props.className)}>

                <Heading className={`${styles.contactsTitle} ${styles.centered}`}
                         title="Контакты"/>
                <div className={styles.contact}>
                    <div className={styles.info}> {props.data.map(info => <Info key={info.id} {...info} />)}</div>
                    <Address className={styles.address}/>
                </div>
            </div>
        </>

    );
}

export default Contacts;
