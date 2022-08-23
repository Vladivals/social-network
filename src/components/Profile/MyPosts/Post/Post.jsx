import React from "react";
import s from "./Post.module.css";
import likeImg from "../../../../assets/images/like.png";
import Avatar from "../../../Avatar/Avatar";


const Post = (props) => {

  return (
    <div className={s.postWrapper}>
      <div className={s.item}>
        <Avatar avatar={props.profile?.photos?.small} />
        {props.message};
      </div>
      <div className={s.footer}>
        <div className={s.like}>
          <img src={likeImg} alt="likeImg" />
          {props.likesCount}
        </div>

      </div>
    </div>
  );
};

export default Post;
