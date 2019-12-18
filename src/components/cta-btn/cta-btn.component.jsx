import React from 'react';
import styles from './cta-btn.styles.scss';

const CTABtn = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} ctabtn`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CTABtn;
