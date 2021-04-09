import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Form } from 'informed';

import Button from '@magento/venia-ui/lib/components/Button';
import Field from '@magento/venia-ui/lib/components/Field';
import TextInput from '@magento/venia-ui/lib/components/TextInput';
import Password from '@magento/venia-ui/lib/components/Password';
import LinkButton from '@magento/venia-ui/lib/components/LinkButton';
import FormError from '@magento/venia-ui/lib/components/FormError';
import { isRequired } from '@magento/venia-ui/lib/util/formValidators';
import { GET_CART_DETAILS_QUERY } from '@magento/venia-ui/lib/components/SignIn/signIn.gql';
import { useSignIn } from '@magento/peregrine/lib/talons/SignIn/useSignIn';

import classes from './LoginForm.css';

const LoginForm = () => {
  const { formatMessage } = useIntl();
  const talonProps = useSignIn({
    getCartDetailsQuery: GET_CART_DETAILS_QUERY
  });

  const { errors, handleSubmit, isBusy, setFormApi } = talonProps;

  return (
    <Form className={classes.root} getApi={setFormApi} onSubmit={handleSubmit}>
      <FormError errors={Array.from(errors.values())} />

      <Field
        label={formatMessage({
          id: 'signIn.emailAddressText'
        })}
      >
        <TextInput autoComplete="email" field="email" validate={isRequired} disabled={isBusy} />
      </Field>

      <Password
        fieldName="password"
        label={formatMessage({
          id: 'signIn.passwordText'
        })}
        validate={isRequired}
        autoComplete="current-password"
        isToggleButtonHidden={false}
        disabled={isBusy}
      />

      <Button priority="high" type="submit" disabled={isBusy}>
        <FormattedMessage id="global.logIn" />
      </Button>

      <LinkButton type="button">
        <FormattedMessage id="global.passwordForget" />
      </LinkButton>
    </Form>
  );
};

export default LoginForm;
