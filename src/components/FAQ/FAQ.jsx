import React from "react";
import styles from "./Faq.module.css";
import cn from "classnames";
function Faq(props) {
  return (
    <>
      <div className={cn(styles.wrap, props.className)}></div>
    </>
  );
}

export default Faq;
