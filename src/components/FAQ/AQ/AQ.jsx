import React from "react";
import styles from "./AQ.module.css";
import cn from "classnames";
function Aq(props) {
  return (
    <div className={cn(styles.wrap, props.className)}>
      <h3>{props.lable}</h3>
      <p>{props.children}</p>
    </div>
  );
}

export default Aq;
