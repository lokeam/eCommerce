import React from 'react';
import { ReactComponent as Logo } from '../../static/svg/logo.svg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import styles from './navigation.styles.scss';

const Navigation = ({ currentUser, hidden }) => (
  <div className='nav'>
    <Link to='/' className='logo__wrapper' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='nav__linkContainer'>
      <Link to='/shop' className='nav__linkWrapper'>
        shop
      </Link>
      <Link to='/contact' className='nav__linkWrapper'>
        contact
      </Link>

      { currentUser ?
        <div className='nav_linkWrappper'
             onClick={ () => auth.signOut() }>Sign out</div>
        :
        <Link className='nav_linkWrappper'
              to='/signin'>Sign In</Link> }

      <CartIcon />
    </div>
    {
      hidden ? null : <CartDropdown />
    }

  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Navigation);
