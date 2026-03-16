import React from "react";
import "./Button.scss";
const Button = ({ text, className, type, disabled }) => {
  return (
    <button type={type} className={className} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;