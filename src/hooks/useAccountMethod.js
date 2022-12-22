import { useState } from 'react';

const useAccountMethod = initialValue => {
  const [accountMethod, setAccountMethod] = useState(initialValue);

  return {
    accountMethod,
    setAccountMethod
  };
};

export default useAccountMethod;
