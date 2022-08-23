import React, { useState } from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import ProfileDataForm from "./ProfileDataForm";
import Button from "../../Button/Button";
import * as FaIcons from "react-icons/fa";

const ProfileInfo = (props) => {

  let [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return (
      <div className={s.preloader}>
        <Preloader />
      </div>
    );
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    };
  }

  const onSubmit = (formData) => {
    props.saveProfile(formData)
      .then(() => setEditMode(false));


  }

  return (
    <div className={s.profileInfoWrapper}>
      <div className={s.descriptionBlock}>
        <div
          className={s.mainPhoto}
          style={{ background: `url("${props.profile.photos.large || userPhoto}") center center/cover no-repeat, #244BC5` }}
        >
          <FaIcons.FaCloudDownloadAlt />
          {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
        </div>

        {editMode
          ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit} />
          : <ProfileData goToEditMode={() => { setEditMode(true) }} profile={props.profile} isOwner={props.isOwner} />}


        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
      </div>
    </div>
  );
};

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return <div className={s.profileInfo}>
    <div className={s.profileName}>
      <span>
        {profile.fullName}
      </span>
      {
        isOwner && <Button onClick={goToEditMode} label="Edit" styles={s.editBtn} />
      }
    </div>

    <div>
      {
        profile.lookingForAJob && <b className={s.lookingForAJob}>Looking for a job</b>
      }
    </div>
    {profile.lookingForAJob &&
      <div className={s.item}>
        My professional skills:{profile.lookingForAJobDescription}
      </div>
    }
    <div className={s.item}>
      About me:{profile.aboutMe}
    </div>
    <div className={s.item}>
      <b>Contacts</b>:{Object.keys(profile.contacts).map(key => {
        if (profile.contacts[key]) {
          return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
        }
      })}
    </div>
  </div>
}



const Contact = ({ contactTitle, contactValue }) => {
  return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;
