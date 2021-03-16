import React from "react";
import "./tabs.scss";

const Tabs = ({ category, onTabchange }) => {
  return (
    <button onClick={onTabchange} data-category={category}>
      {category}
    </button>
  );
};

export default Tabs;
