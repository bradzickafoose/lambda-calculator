import React from "react";
import "./NumberButton.scss";

const NumberButton = props => {
  console.log("NumberButton", props)
  return (
    /* Display a button element rendering the data being passed down from the parent container on props */
    <button className="numberButton" onClick={() => props.addNumber(props.text)}>
      {props.text}
    </button>
  );
};

export default NumberButton;