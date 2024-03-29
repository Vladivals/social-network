import React from "react";
import { reduxForm } from "redux-form";
import { createField, Input, Textarea } from "../../common/FormsControls/FormsControls"
import s from "./ProfileInfo.module.css";
import style from "../../common/FormsControls/FormsControls.module.css";
import Button from "../../Button/Button";


const ProfileDataForm = (props) => {

  return <form onSubmit={props.handleSubmit} className={s.profileEditform}>
    {<div className={s.saveBtn}><Button label="Save" /></div>}

    {props.error && <div className={style.formSummaryError}>
      {props.error}
    </div>}

    <div>
      <b>Full name</b>: {createField("Full name", "fullName", [], Input)}
    </div>

    <div>
      <b>Looking for a job</b>: {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
    </div>

    <div>
      <b>My professional skills</b>: {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
    </div>

    <div>
      <b>About me</b>:
      {createField("About me", "aboutMe", [], Textarea)}
    </div>

    <div>
      <b>Contacts</b>:{Object.keys(props.profile.contacts).map(key => {
        
        return <div key={key} className={s.contact}>
          <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
        </div>
      })}
    </div>
  </form>
}

const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm)

export default ProfileDataFormReduxForm;