import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";
import Button from "../../Button/Button";
import Avatar from "../../Avatar/Avatar";

const maxLength10 = maxLengthCreator(10);

const addPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.addPostCardForm}>
      <div>
        <Field
          component={Textarea}
          name="newPostBody"
          validate={[required, maxLength10]}
        />
      </div>
      <div className={s.addPostCardFormFooter}>
        <Button label="Add post" />
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(
  addPostForm
);

const MyPosts = (React.render = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post
      message={p.message}
      likesCount={p.likesCount}
      profile={props.profile}
    />
  ));

  let addNewMessage = (values) => {
    props.addPost(values.newPostBody);
  };

  return (
    <div className={s.postsBlock}>
      <div className={s.addPostCard}>
        <Avatar avatar={props.profile?.photos?.small} />
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
});

export default MyPosts;
