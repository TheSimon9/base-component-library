import React from 'react';
import PropTypes from "prop-types";
import "./Button.sass";

function Button(props) {
  return <button
    data-testid={"button-component"}
    onClick={props.action}
    className={`button color-${props.color} size-${props.size}`}>
    {props.text}
  </button>
}

Button.defaultProps = {
  text: "Click me!",
  action: () => console.log("Action not set!"),
  color: "gray",
  size: "md"
}

Button.propTypes = {
  text: PropTypes.string,
  action: PropTypes.func,
  color: PropTypes.oneOfType(["gray","blue", "red", "black"]),
  size: PropTypes.oneOfType(["xl", "md", "xs"])
}

export default Button;