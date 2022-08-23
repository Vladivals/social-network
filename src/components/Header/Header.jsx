import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import s from './Header.module.css'


const Header = (props) => {
  return (
    <header className={s.header}>
      {/* <img src="https://static.vecteezy.com/system/resources/previews/000/404/753/original/modern-company-logo-design-vector.jpg" /> */}
      <div></div>
      <div className={s.loginBlock}>
        {props.isAuth
          ? <div>{props.login} - <Button label="Log out" onClick={props.logout} /></div>
          : <NavLink to={'/login'}>Login</NavLink>}

      </div>
    </header>
  );
};

export default Header;
