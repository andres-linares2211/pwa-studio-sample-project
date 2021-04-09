import { string } from 'prop-types';
import React from 'react';

const Input = () => {
  return (
    <label>
      <input />
    </label>
  );
};

Input.propTypes = {
  value: string,
  onChange: Function
};

export default Input;
