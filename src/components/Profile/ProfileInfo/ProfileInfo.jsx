import React, { useState } from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = (props) => {

  let [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return <Preloader />;
  }

const onMainPhotoSelected = (e) => {
   if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
   };
}

const onSubmit = (formData) => {
  props.saveProfile(formData)
  .then (() => setEditMode(false));
            
  
}

  return (
    <div>
      {/* <div>
        <img src="https://tse2.mm.bing.net/th?id=OIP.RWn0ky8PW3yOXOek2SjdaAHaEX&pid=Api&P=0&w=314&h=185" />
      </div> */}

      <div className={s.descriptionBlock}>
        <img className={s.mainPhoto} src={props.profile.photos.large || userPhoto} />
        {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}

      { editMode 
            ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/> 
            : <ProfileData goToEditMode={() => {setEditMode(true)}} profile={props.profile} isOwner={props.isOwner}/> }
      

        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
      </div>
    </div>
  );
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {
  return <div>
    {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
  <div>
    <b>Full name</b>:{profile.fullName}
    </div>
    <div>
    <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
    </div>
    {profile.lookingForAJob &&
    <div>
    <b>My professional skills</b>:{profile.lookingForAJobDescription}
    </div>
    }
    <div>
    <b>About me</b>:{profile.aboutMe}
    </div>
    <div>
    <b>Contacts</b>:{Object.keys(profile.contacts).map(key => {
      return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
    })}
    </div>
  </div>
}



const Contact = ({contactTitle, contactValue}) => {
  return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;
