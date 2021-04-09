import React from 'react';
import { FormattedMessage } from 'react-intl';
import Button from '@magento/venia-ui/lib/components/Button';

const AccountCreationSection = () => {
  return (
    <section>
      <h5>
        <FormattedMessage id="New company account" />
      </h5>

      <p>
        <FormattedMessage id="newCompany.benefitMessaeg" />
      </p>

      <Button>
        <FormattedMessage id="Create new company account" />
      </Button>
    </section>
  );
};

export default AccountCreationSection;
