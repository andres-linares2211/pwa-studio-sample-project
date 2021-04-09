import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import Button from '@magento/venia-ui/lib/components/Button';
import Field from '@magento/venia-ui/lib/components/Field';
import TextInput from '@magento/venia-ui/lib/components/TextInput';
import Password from '@magento/venia-ui/lib/components/Password';
import LinkButton from '@magento/venia-ui/lib/components/LinkButton';
import { isRequired } from '@magento/venia-ui/lib/util/formValidators';

import classes from './LoginForm.css';

const LoginForm = () => {
  const { formatMessage } = useIntl();

  return (
    <form className={classes.root}>
      <Field
        label={formatMessage({
          id: 'signIn.emailAddressText'
        })}
      >
        <TextInput autoComplete="email" field="email" validate={isRequired} />
      </Field>

      <Password
        fieldName="password"
        label={formatMessage({
          id: 'signIn.passwordText'
        })}
        validate={isRequired}
        autoComplete="current-password"
        isToggleButtonHidden={false}
      />

      <Button priority="high" type="submit">
        <FormattedMessage id="global.logIn" />
      </Button>

      <LinkButton type="button">
        <FormattedMessage id="global.passwordForget" />
      </LinkButton>
    </form>
  );
};

export default LoginForm;
