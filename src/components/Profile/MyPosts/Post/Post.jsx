import React from "react";
import s from "./Post.module.css";
import likeImg from "../../../../assets/images/like.png";
import userPhoto from "../../../../assets/images/user.png";


const Post = (props) => {





  return (
    <div>
      <div className={s.item}>
        <img src={userPhoto }></img>
        {props.message};
      </div>
      <div>
        <div className={s.like}>
          <img src={likeImg} /> 
          {props.likesCount}
          </div>
        
      </div>
    </div>
  );
};

export default Post;
