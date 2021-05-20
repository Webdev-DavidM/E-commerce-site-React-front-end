/* NPM packages */
import React from 'react';
import { NavLink } from 'react-router-dom';

/* css */

import styles from '../NavBar.module.css';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <NavLink to='/'>
        <img
          src={`https://webdev-davidm.github.io/E-commerce-front-end/images/logo.png`}
          alt='DM sports logo'></img>
      </NavLink>
    </div>
  );
};

export default Logo;
