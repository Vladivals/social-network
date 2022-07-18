import React, { Component } from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";


const maxLength10 = maxLengthCreator(10);


const addPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name="newPostBody"
          validate={[required, maxLength10 ]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(addPostForm)


const MyPosts = React.render = (props) => {


  
  

  console.log("render yo")
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

let newPostElement = React.createRef();

let addNewMessage = (values) => {
  props.addPost(values.newPostBody);
};

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
        <AddMessageFormRedux onSubmit={addNewMessage} />
                </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};




export default MyPosts;
