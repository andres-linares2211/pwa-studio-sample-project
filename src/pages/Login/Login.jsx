import React from 'react';

import BackButton from '../../components/atoms/BackButton';
import LoginForm from '../../components/molecules/LoginForm';
import AccountCreationSection from '../../components/molecules/AccountCreationSection';

import classes from './Login.css';

const Login = () => {
  return (
    <div className={classes.root}>
      <BackButton />

      <main>
        <LoginForm className="login-form" />
        <AccountCreationSection />
      </main>
    </div>
  );
};

export default Login;
