import React from "react";
import styles from "./FAQ.module.css";
import Aq from "./AQ";
import cn from "classnames";
function FaqHomeLayout(props) {
  return (
    <>
      <div className={cn(styles.wrap, props.className)}>
        <Aq lable="Lorem ipsum dolor sit.">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem illum
          nobis quam sit beatae quaerat architecto, explicabo nulla quasi omnis!
        </Aq>
        <Aq lable="Lorem ipsum dolor sit.">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem illum
          nobis quam sit beatae quaerat architecto, explicabo nulla quasi omnis!
        </Aq>
        <Aq lable="Lorem ipsum dolor sit.">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem illum
          nobis quam sit beatae quaerat architecto, explicabo nulla quasi omnis!
        </Aq>
        <Aq lable="Lorem ipsum dolor sit.">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem illum
          nobis quam sit beatae quaerat architecto, explicabo nulla quasi omnis!
        </Aq>
      </div>
    </>
  );
}

export default FaqHomeLayout;
