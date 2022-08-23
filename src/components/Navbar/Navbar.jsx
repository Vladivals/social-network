import React from "react";
import { Link, NavLink } from "react-router-dom";
import './Navbar.css';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as ImIcons from "react-icons/im";
import * as FiIcons from "react-icons/fi";
import { IconContext } from "react-icons/lib";


const Navbar = ({ sidebar, onToggleNavBar }) => {
  return (
    <IconContext.Provider value={{ color: '#fff' }}>

      <nav className='navbar'>

        <Link to="#" className='menu-bars'>
          <FaIcons.FaBars onClick={onToggleNavBar} />
        </Link>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={onToggleNavBar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            <li>
              <div className='nav-text' >
                <NavLink to="/profile" className="nav-profile"><ImIcons.ImProfile />&nbsp; Profile</NavLink>
              </div>
            </li>
            <li><div className='nav-text'>
              <NavLink to="/dialogs" className='nav-messages'><FiIcons.FiMessageSquare /> &nbsp; Messages </NavLink>
            </div></li>
            <li><div className='nav-text'>
              <NavLink to="/users" className='nav-users'><FiIcons.FiUsers />&nbsp; Users </NavLink>
            </div></li>
            <li><div className='nav-text'>
              <a className="nav-news"> <FaIcons.FaRegNewspaper />&nbsp; News </a>
            </div></li>
            <li>
              <div className='nav-text'>
                <a className="nav-music"><FaIcons.FaMusic />&nbsp; Music </a>
              </div>
            </li>
            <li>
              <div className='nav-text'>
                <a className="nav-settings"><FiIcons.FiSettings />&nbsp; Settings </a>
              </div>
            </li>
          </ul>
        </nav>
      </nav>
    </IconContext.Provider>
  );
};

export default Navbar;
