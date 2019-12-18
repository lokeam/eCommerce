import React from 'react';
import { ReactComponent as Logo } from '../../static/svg/logo.svg';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import styles from './navigation.styles.scss';

const Navigation = ({ currentUser }) => (
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

    </div>
  </div>
);

export default Navigation;
