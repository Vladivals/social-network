import React from "react";
import style from "./Avatar.module.css";

const Avatar = ({ avatar }) => {
  return (
    <div
      className={style.avatar}
      style={{ background: `url("${avatar}") center center/contain no-repeat, rgba(243, 244, 246, 1)` }}
    />
  )
}

export default Avatar;