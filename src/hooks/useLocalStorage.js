import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = value => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    setStoredValue(() => valueToStore);

    window.localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  const deleteValue = () => {
    window.localStorage.removeItem(key);
  };

  return { storedValue, setValue, deleteValue };
};

export default useLocalStorage;
