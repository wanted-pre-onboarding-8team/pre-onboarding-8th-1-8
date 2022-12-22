import VALIDATIONS from 'constants/validations';
import { useState } from 'react';

const useInput = ({ initialValue, errorMessage, required, type }) => {
  const [value, setValue] = useState(initialValue);
  const [valid, setValid] = useState(true);
  const regexp = VALIDATIONS[type];

  const handleChange = ({ target: { value } }) => {
    setValid(!!value.match(regexp));
    setValue(value);
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
