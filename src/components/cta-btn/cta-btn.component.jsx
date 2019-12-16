import React from 'react';
import styles from './cta-btn.styles.scss';

const CTABtn = ( {children, ...otherProps} ) => (
  <button className="ctabtn" {...otherProps}>
    {children}
  </button>
);

export default CTABtn;
