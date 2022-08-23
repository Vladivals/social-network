import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";
import Button from "../Button/Button";


let Users = (props) => {
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id} className={s.user}>
          <span className={s.userAvatar}>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  className={s.userPhoto}
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <Button
                  label="Unfollow"
                  disabled={props.followingInProgress.some(id => id === u.id)}
                  onClick={() => props.unfollow(u.id)}
                  color="grey"
                />
              ) : (
                <Button
                  label="Follow"
                  disabled={props.followingInProgress.some(id => id === u.id)}
                  onClick={() => props.follow(u.id)}
                />
              )}
            </div>
          </span>
          <span className={s.userInfo}>
            <span>
              <div><b>Name:</b>{u.name}</div>
              {u.status && <div><b>Status:</b> {u.status}</div>}
            </span>
            <span>
              <div>{u?.location?.city}</div>
              <div>{u?.location?.country}</div>
            </span>
          </span>
        </div >
      ))}
      <Paginator currentPage={props.currentPage} totalItemsCount={props.totalUsersCount} pageSize={props.pageSize} onPageChanged={props.onPageChanged} />
    </div >
  )
};

export default Users;
