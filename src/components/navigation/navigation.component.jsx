import React from 'react';
import { ReactComponent as Logo } from '../../static/svg/logo.svg';
import { Link } from 'react-router-dom';

import styles from './navigation.styles.scss';

const Navigation = () => (
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
      <Link to='/signin' className='nav__linkWrapper'>
        sign in
      </Link>
    </div>
  </div>
);

export default Navigation;
