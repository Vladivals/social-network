import React from "react";
import style from "./Button.module.css";

const Button = ({ label, onClick, styles, disabled, color }) => {
  return (
    <button
      onClick={() => disabled ? null : onClick()}
      className={`${style.button} ${styles} ${disabled && style.disabled} ${color === "grey" && style.grey}`}
    >
      {label}
    </button>
  )
}

export default Button;