import React from "react";
import {NavLink} from "react-router-dom";
import "./Header.scss";

const Header = () => {
    return(
        <div className='header'>
            <nav className='header__nav'>
                    <NavLink className='header__nav_link' to='/'>HOME</NavLink>
                    <NavLink className='header__nav_link' to='/'>TV</NavLink>
                    <NavLink className='header__nav_link' to='/'>NoteBook</NavLink>
                    <NavLink className='header__nav_link' to='/'>PHONE</NavLink>
            </nav>
        </div>
    )
}

export default Header;