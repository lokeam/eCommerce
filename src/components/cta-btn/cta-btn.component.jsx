import React from 'react';
import styles from './cta-btn.styles.scss';

const CTABtn = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${inverted ? 'inverted' : ''} ${
      isGoogleSignIn ? 'google-sign-in' : ''
    } cta-btn`}
    {...otherProps} >
    {children}
  </button>
);

export default CTABtn;
