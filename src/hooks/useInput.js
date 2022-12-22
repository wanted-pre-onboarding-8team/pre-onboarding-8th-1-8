import VALIDATIONS from 'constants/Validations';
import { useState } from 'react';

const useInput = ({ initialValue, errorMessage, required, pattern }) => {
  const [value, setValue] = useState(initialValue);
  const [valid, setValid] = useState(false);
  const regexp = VALIDATIONS[pattern];

  const handleChange = event => {
    event.target.value.match(regexp) ? setValid(() => true) : setValid(() => false);
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
