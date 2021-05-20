/* NPM packages */
import React from 'react';
import { Link } from 'react-router-dom';

/* CSS */

import styles from './ShopButton.module.css';

const ShopButton = ({ url, name }) => {
  return (
    <div className={styles.shopbutton}>
      <Link to={`${url}`}>{name} </Link>
    </div>
  );
};

export default ShopButton;
