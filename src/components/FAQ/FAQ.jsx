import React, { useState } from "react";
import styles from "./FAQ.module.css";
import Aq from "./AQ";
import cn from "classnames";

function Faq(props) {
  const [activeItem, setActiveItem] = useState(props.defaultActiveItem || 1);

  const handleClick = (id) => {
    activeItem === id ? setActiveItem(null) : setActiveItem(id);
  };

  return (
    <>
      <div className={cn(styles.wrap, props.className)}>
        {props.data &&
          props.data.map((item) => (
            <Aq
              onClick={() => handleClick(item.id)}
              lable={item.title}
              active={item.id === activeItem}
              key={item.id}
            >
              {item.body}
            </Aq>
          ))}
      </div>
    </>
  );
}

export default Faq;
