import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";
import userPhoto from "../../../assets/images/user.png";
import Avatar from "../../Avatar/Avatar";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (

    <div className={s.dialog + " " + s.active}>
      <Avatar avatar={userPhoto} />
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};


export default DialogItem;
