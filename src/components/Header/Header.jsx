import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css'


const Header = (props) => {
  return (
    <header className={s.header}>
      <img src="https://static.vecteezy.com/system/resources/previews/000/404/753/original/modern-company-logo-design-vector.jpg" />

      <div className={s.loginBlock}>
        {props.isAuth 
        ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div> 
        : <NavLink to={'/login'}>Login</NavLink>}
        
      </div>
    </header>
  );
};

export default Header;
