import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import './Navigation.css';
import logo from '../../Images/logo.png'

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <div>
        <LoginFormModal />
        <SignupFormModal />
      </div>
    );
  }

  return (
    <div className="flex-container-spaced navigationBar">
      <NavLink exact to="/"><img className="logo" src={logo} alt='logo'/></NavLink>
        {isLoaded && sessionLinks}
    </div>
  );
}

export default Navigation;
