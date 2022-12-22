import { useState } from 'react';

import Validations from '../utils/constants/Validations';

const useInput = ({ initialValue, errorMessage, required, pattern }) => {
  const [value, setValue] = useState(initialValue);
  const [valid, setValid] = useState(false);
  const getPattern = Validations[pattern];

  const handleChange = event => {
    event.target.value.match(getPattern) ? setValid(() => true) : setValid(() => false);
    setValue(() => event.target.value);
  };

  return {
    value,
    errorMessage,
    required,
    valid,
    onChange: handleChange,
  };
};

export default useInput;
