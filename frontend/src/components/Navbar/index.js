import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import './styles.css'

// from -> https://www.youtube.com/watch?v=VzWBLj_CfpE
const Navbar = () => {
  return (
      <>
        <Nav>
          <NavLink to='/'>
            <img className='image' src={require("./images/book.png")} alt='logo' />
          </NavLink>
          <Bars />
          <NavMenu>
            <NavLink to='/books' activeStyle>
              Books
            </NavLink>
            <NavLink to='/services' activeStyle>
              Services
            </NavLink>
            <NavLink to='/contact-us' activeStyle>
              Contact
            </NavLink>
            <NavLink to='/sign-up' activeStyle>
              Sign Up
            </NavLink>
            {/* Second Nav */}
            {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          </NavBtn>
        </Nav>
      </>
  );
};

export default Navbar;
