import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import Button from '@magento/venia-ui/lib/components/Button';
import Input from '../../atoms/Input';
import classes from './LoginForm.css';

const LoginForm = () => {
  return (
    <form className={classes.root}>
      <h1>
        <FormattedMessage id={'Log in'} />
      </h1>

      <Input />
      <Input />

      <Button>
        <FormattedMessage id={'Log in'} />
      </Button>

      <Link to="/forgot-password">
        <FormattedMessage id="Did you forget your password?" />
      </Link>
    </form>
  );
};

export default LoginForm;
