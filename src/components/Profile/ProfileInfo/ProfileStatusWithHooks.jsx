import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import s from "./ProfileInfo.module.css";

const ProfileStatusWithHooks = (props) => {

  let [editMode,setEditMode] = useState(false);
  let [status,setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {

    setEditMode(false);

    props.updateStatus(status);

};

const onStatusChange = (e) => {
  setStatus(e.currentTarget.value)
  }

  return (
    <div className={s.status}>
      { !editMode &&
        <div >
          <b>Status: </b><span onDoubleClick={activateMode}>{props.status}</span>
        </div>
      }
      { editMode && (
        <div >
          <input
            autoFocus={true}
            onBlur={deactivateEditMode}
            onChange={onStatusChange}
            value={status}
          ></input>
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
