import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as NavCartIcon } from '../../static/svg/shoppingCart.svg';
import styles from './cart-icon.styles.scss';

const CartIcon = ( {toggleCartHidden, itemCount} ) => (
  <div className='cart-icon' onClick={ toggleCartHidden }>
    <NavCartIcon className='nav-cart-icon'/>
    <span className='item-count'>{itemCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden() )
});

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);