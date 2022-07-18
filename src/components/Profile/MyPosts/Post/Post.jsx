import React from "react";
import s from "./Post.module.css";

const Post = (props) => {





  return (
    <div>
      <div className={s.item}>
        <img src="https://tse3.mm.bing.net/th?id=OIP.dQqhbTIZRbyncab04A69JAHaFj&pid=Api&P=0&w=234&h=175"></img>
        {props.message};
      </div>
      <div>
        <span>like{props.likeQuantity}</span>
        
      </div>
    </div>
  );
};

export default Post;
