import React from 'react';
import { FormattedMessage } from 'react-intl';

import IconBack from '../../icons/IconBack';

const BackButton = () => {
  return (
    <button>
      <IconBack />
      <FormattedMessage id="{'Back'}" />
    </button>
  );
};

export default BackButton;
