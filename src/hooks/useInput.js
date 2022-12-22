import VALIDATIONS from 'constants/Validations';
import { useState } from 'react';

const useInput = ({ initialValue, errorMessage, required, type }) => {
  const [value, setValue] = useState(initialValue);
  const [valid, setValid] = useState(true);
  const regexp = VALIDATIONS[type];

  const handleChange = event => {
    if(event.target.value.length !== 0){
      event.target.value.match(regexp) ? setValid(() => true) : setValid(() => false);
    }
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
