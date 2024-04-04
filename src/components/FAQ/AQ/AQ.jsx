import React, { useState } from "react";
import styles from "./AQ.module.css";
import cn from "classnames";

function Aq(props) {
  return (
    <div onClick={props.onClick} className={cn(styles.wrap, props.className)}>
      <h3 className={styles.lable}>{props.lable}</h3>
      <buttton className={styles.button}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#00071F"
          xmlns="http://www.w3.org/2000/svg"
        >
          {props.active ? (
            <path d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z" />
          ) : (
            <path d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z" />
          )}
        </svg>
      </buttton>
      <p
        className={styles.text}
        style={{
          display: props.active ? "block" : "none",
        }}
      >
        {props.children}
      </p>
    </div>
  );
}

export default Aq;
