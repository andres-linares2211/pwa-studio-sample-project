import React from 'react';
import { useHistory } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import IconBack from '../../icons/IconBack';

const BackButton = () => {
  const history = useHistory();

  const goBack = () => history.goBack();

  return (
    <button onClick={goBack}>
      <IconBack />
      <FormattedMessage id="{'Back'}" />
    </button>
  );
};

export default BackButton;
