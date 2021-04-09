import React from 'react';
import { useHistory } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import defaultClasses from './BackButton.css';
import IconBack from '../../icons/IconBack';

const BackButton = () => {
  const history = useHistory();
  const goBack = () => history.goBack();

  return (
    <button className={defaultClasses.root} onClick={goBack}>
      <IconBack />
      <FormattedMessage id={'Back'} />
    </button>
  );
};

export default BackButton;
