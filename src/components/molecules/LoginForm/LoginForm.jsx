import React from 'react';
import { FormattedMessage } from 'react-intl';

import Button from '@magento/venia-ui/lib/components/Button';
import Field from '@magento/venia-ui/lib/components/Field';
import LinkButton from '@magento/venia-ui/lib/components/LinkButton';

import classes from './LoginForm.css';

const LoginForm = () => {
  return (
    <form className={classes.root}>
      <Field label="Email">
        <input />
      </Field>

      <Field label="Password">
        <input />
      </Field>

      <Button priority="high">
        <FormattedMessage id="global.logIn" />
      </Button>

      <LinkButton type="button">
        <FormattedMessage id="global.passwordForget" />
      </LinkButton>
    </form>
  );
};

export default LoginForm;
