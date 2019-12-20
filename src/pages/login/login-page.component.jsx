import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import styles from './login-page.styles.scss';

const LogInPage = () => (
  <div className="login-page">
    <SignIn />
    <SignUp />
  </div>
);

export default LogInPage;
