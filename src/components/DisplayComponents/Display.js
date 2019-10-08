import React from "react";

const Display = () => {
  return <div className="display">{
    /* Display any props data here */
    {`${props.value}`}
  }</div>;
};

export default Display;
