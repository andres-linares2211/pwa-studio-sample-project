import React from 'react';
import { FormattedMessage } from 'react-intl';

import BackButton from '../../components/atoms/BackButton';
import LoginForm from '../../components/molecules/LoginForm';
import AccountCreationSection from '../../components/molecules/AccountCreationSection';

import classes from './Login.css';

const Login = () => {
  return (
    <div className={classes.root}>
      <BackButton />

      <main>
        <h1>
          <FormattedMessage id="Log in" />
        </h1>

        <LoginForm className="login-form" />
        <AccountCreationSection />
      </main>
    </div>
  );
};

export default Login;
