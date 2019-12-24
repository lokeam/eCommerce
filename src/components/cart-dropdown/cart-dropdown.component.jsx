import React from 'react';
import CTABtn from '../cta-btn/cta-btn.component';
import styles from './cart-dropdown.styles.scss';

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    <CTABtn>Go to checkout</CTABtn>
  </div>
);

export default CartDropdown;
