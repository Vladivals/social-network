import React, { useEffect } from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Messages";
import { AddMessageFormRedux } from "./Message/addMessageForm";



const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} isOwner={true} profileAvatar={props.profile?.photos?.small} />
  ));

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };

  useEffect(() => {
    props.getUserProfile(props.authorisedUserId)
  }, [])

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialogsItemsHeader}>
          Dialogs
        </div>
        <div className={s.dialogsContent}>
          {dialogsElements}
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.dialogsItemsHeader}>
          Username
        </div>
        <div className={s.messagesContent}>
          <div className={s.messagesContentMessages}>{messagesElements}</div>
          <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
      </div>
    </div>
  );
};



export default Dialogs;
