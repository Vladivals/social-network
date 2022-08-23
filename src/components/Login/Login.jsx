import React from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { login } from "../../redux/app-reducer";
import { required } from "../../utils/validators/validators";
import { Navigate } from "react-router-dom";
import { createField, Input } from "../common/FormsControls/FormsControls";
import style from "./../common/FormsControls/FormsControls.module.css";
import loginStyle from "./Login.module.css";
import Button from "../Button/Button";
import background from "../../assets/images/bg.png";

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField("Email", "email", [required], Input)}
      {createField("Password", "password", [required], Input, { type: "password" })}
      <div className={loginStyle.rememberMe}>
        {createField(null, "rememberMe", [], Input, { type: "checkbox" }, "remember me")}
      </div>

      {captchaUrl && <img src={captchaUrl} />}
      {captchaUrl && createField("Symbols from image", "captcha", [required], Input, {})}

      {error && <div className={`${style.formSummaryError} ${loginStyle.error}`}>
        {error}
      </div>}
      <div>
        <Button label="Login" styles={loginStyle.button} />
      </div>
    </form>
  );
};

const ReduxLoginForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  };

  if (props.isAuth) {
    return <Navigate to={"/profile"} />
  }
  return (
    <div
      className={loginStyle.wrapper}
      style={{ background: `url("${background}") center center/cover no-repeat, #244BC5` }}
    >
      <div className={loginStyle.loginCard}>
        <h1>Login</h1>
        <ReduxLoginForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);
