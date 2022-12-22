import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [storageValue, setStorage] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setStorageValue = value => {
    const valueToStore = value instanceof Function ? value(storageValue) : value;
    setStorage(() => valueToStore);

    window.localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  const deleteStorageValue = () => {
    window.localStorage.removeItem(key);
  };

  return { storageValue, setStorageValue, deleteStorageValue };
};

export default useLocalStorage;
