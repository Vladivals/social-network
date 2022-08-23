import React from "react";
import Avatar from "../../Avatar/Avatar";
import s from "./../Dialogs.module.css";



const Message = ({ message, isOwner, profileAvatar }) => {
  return (
    <div className={`${s.dialog} ${isOwner && s.dialogMine}`}>
      <Avatar avatar={isOwner && profileAvatar} />
      <span>{message}</span>
    </div>
  )
};



export default Message;
