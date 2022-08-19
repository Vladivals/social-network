import React from "react";
import { Link, NavLink } from "react-router-dom";
import './Navbar.css';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as ImIcons from "react-icons/im";
import * as FiIcons from "react-icons/fi";


import { useState } from "react";
import { IconContext } from "react-icons/lib";


const Navbar = () => {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <IconContext.Provider value={{ color: '#fff' }}>

    <nav className='navbar'>

      <Link to="#" className='menu-bars'>
          <FaIcons.FaBars onClick={showSidebar} />
      </Link>

      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <li className='navbar-toggle'>
            <Link to='#' className='menu-bars'>
              <AiIcons.AiOutlineClose />
            </Link>
          </li>

          <li>
            <div className='nav-text' >
            <NavLink to="/profile" className= ''><ImIcons.ImProfile />&nbsp; Profile</NavLink>
          </div>
      </li>
      <li><div className='nav-text'>
        <NavLink to="/dialogs" className= ''><FiIcons.FiMessageSquare /> &nbsp; Messages </NavLink>
      </div></li>
      <li><div className='nav-text'>
        <NavLink to="/users" className=''><FiIcons.FiUsers />&nbsp; Users </NavLink>
      </div></li>
      <li><div className='nav-text'>
        <a> <FaIcons.FaRegNewspaper />&nbsp; News </a>
      </div></li>
      <li>
      <div className='nav-text'>
        <a><FaIcons.FaMusic />&nbsp; Music </a>
      </div>
      </li>
      <li>
      <div className='nav-text'>
        <a><FiIcons.FiSettings />&nbsp; Settings </a>
      </div>
      </li>
        </ul>
      </nav>
    </nav>
    </IconContext.Provider>
  );
};

export default Navbar;
