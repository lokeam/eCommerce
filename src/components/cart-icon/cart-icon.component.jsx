import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { ReactComponent as NavCartIcon } from '../../static/svg/shoppingCart.svg';
import styles from './cart-icon.styles.scss';

const CartIcon = ( {toggleCartHidden} ) => (
  <div className='cart-icon' onClick={ toggleCartHidden }>
    <NavCartIcon className='nav-cart-icon'/>
    <span className='item-count'>0</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden() )
});

export default connect(null, mapDispatchToProps)(CartIcon);