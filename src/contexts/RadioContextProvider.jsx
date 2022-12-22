import { createContext } from 'react';

const RadioContext = createContext({});

const RadioContextProvider = ({ children, ...rest }) => {
  return (
    <fieldset className="flex flex-row w-full justify-evenly mt-4 text-xl font-semibold">
      <RadioContext.Provider value={rest}>{children}</RadioContext.Provider>
    </fieldset>
  );
};

export { RadioContextProvider, RadioContext };
