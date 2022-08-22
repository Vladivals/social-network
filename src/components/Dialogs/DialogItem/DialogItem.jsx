import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";
import userPhoto from "../../../assets/images/user.png";


const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (

    <div className={s.dialog + " " + s.active}>
          <img src={userPhoto} className={s.userPhoto}></img>

      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};


export default DialogItem;
