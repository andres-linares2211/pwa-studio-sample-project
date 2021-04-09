import React from 'react';
import { FormattedMessage } from 'react-intl';

import Button from '@magento/venia-ui/lib/components/Button';

import defaultClasses from './AccountCreationSection.css';

const AccountCreationSection = () => {
  return (
    <section className={defaultClasses.root}>
      <h5>
        <FormattedMessage id="login.newCompany.title" />
      </h5>

      <p>
        <FormattedMessage id="login.newCompany.message" />
      </p>

      <Button>
        <FormattedMessage id="login.newCompany.create" />
      </Button>
    </section>
  );
};

export default AccountCreationSection;
