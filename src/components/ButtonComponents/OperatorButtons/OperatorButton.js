import React from "react";
import "./OperatorButton.scss";

const OperatorButton = props => {
  console.log(props);
  return (
    /* Display a button element rendering the data being passed down from the parent container on props */
    <button className="operatorButton" onClick={() => props.addOperator(props.operator.value)}>
      {props.operator.char}
    </button>
  );
};

export default OperatorButton;