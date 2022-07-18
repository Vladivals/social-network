import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { login } from "../../redux/app-reducer";
import { required } from "../../utils/validators/validators";
import { Navigate } from "react-router-dom";
import { Input } from "../common/FormsControls/FormsControls";
import style from "./../common/FormsControls/FormsControls.module.css";


const LoginForm = ({handleSubmit, error}) => {
  debugger;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          placeholder={"Email"}
          name={"email"}
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          placeholder={"Password"}
          name={"password"}
          component={Input}
          validate={[required]}
          type={"password"}
        />
      </div>
      <div>
        <Field component={Input} name={"rememberMe"} type={"checkbox"}           validate={[required]}
/>{" "}
        remember me
      </div>
      {error && <div className={style.formSummaryError}>
        {error}
      </div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const ReduxLoginForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

if (props.isAuth) {
  return <Navigate to={"/profile"} />
}

  return (
    <div>
      <h1>Login</h1>
      <ReduxLoginForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);
