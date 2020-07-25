import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '@/assets/images/meetup-vector-logo.png';
import { routes } from '@/constants';

export const PartialPublicHeader = () => {
  return (
    <header id="app-public-header">
      <div className="app-public-header--logo">
        <Link to="/">
          <img src={logo} alt="public-logo" />
        </Link>
      </div>
      <nav className="app-public-header--navigation">
        <li>
          <NavLink to={routes.login}>Login</NavLink>
        </li>
        <li>
          <NavLink to={routes.signup}>Sign up</NavLink>
        </li>
      </nav>
    </header>
  );
};
