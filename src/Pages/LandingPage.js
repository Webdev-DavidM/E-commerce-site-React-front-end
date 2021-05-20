/* NPM packages */
import React from 'react';

/* CSS */
import styles from './LandingPage.module.css';

/* Components */

import ShopButton from '../Components/UIelements/ShopButton';

const LandingPage = () => {
  return (
    <div className={styles.landingpage}>
      <header>
        THE UK'S <span>&nbsp; NO.1 &nbsp;</span> ONLINE FITNESS STORE
      </header>

      <div className={styles.mainimagedesktop}>
        <img
          src={`${process.env.PUBLIC_URL}/images/swimming-landing-page.jpg`}
          alt='Woman on a bike riding'></img>
      </div>

      <header className={styles.title2}>
        <strong>
          DM Sports <span> + &nbsp;</span>
        </strong>
        NEXT DAY DELIVERY AND FREE RETURNS FOR ONLY &nbsp;{' '}
        <strong>£9.99</strong>
        <div>
          <ShopButton url='/run' name='SHOP NOW' width='8rem' />
        </div>
      </header>
      <div className={styles.running}>
        <div className={styles.catdetailsrunning}>
          {' '}
          <p>RUN</p>
          <ShopButton url='/run' name='SHOP' />
        </div>
        <img
          src={`${process.env.PUBLIC_URL}/images/landing-page-run1.jpg`}
          alt='Man running and red running jacket'
        />
      </div>

      <div className={styles.cycling}>
        <img
          src={`${process.env.PUBLIC_URL}/images/landing-page-cycle1.jpg`}
          alt='cyclist and de rosa bike'
        />
        <div className={styles.catdetailscycling}>
          {' '}
          <p>CYCLE</p>
          <ShopButton url='/cycle' name='SHOP' />
        </div>
      </div>
      <div className={styles.swimming}>
        <div className={styles.catdetailsswimming}>
          {' '}
          <p>SWIM</p>
          <ShopButton url='/swim' name='SHOP' />
        </div>
        <img
          src={`${process.env.PUBLIC_URL}/images/landing-page-swim1.jpg`}
          alt='woman swimming and a swim suit'
        />
      </div>
    </div>
  );
};

export default LandingPage;
