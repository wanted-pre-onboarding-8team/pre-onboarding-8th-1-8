import { LOCAL_STORAGE, ROUTES } from 'constants';
import MESSAGE from 'constants/errorMessage';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useLocalStorage from './useLocalStorage';

const useRequest = () => {
  const navigate = useNavigate();
  const { setStorageValue } = useLocalStorage(LOCAL_STORAGE.ACCESS_TOKEN);
  const [error, setError] = useState(false);

  const handleTodoList = response => {
    return response['data'];
  };

  const handleSignInSuccess = response => {
    alert(MESSAGE.LOGIN_SUCCEED);
    setStorageValue(response.data[LOCAL_STORAGE.ACCESS_TOKEN]);
    navigate(ROUTES.TODO);
  };

  const handleSignUpSuccess = () => {
    alert(MESSAGE.SIGNIN_SUCCEED);
    navigate(ROUTES.HOME);
  };

  const responseAction = ({ action, response }) => {
    const actions = {
      SIGN_IN: handleSignInSuccess,
      SIGN_UP: handleSignUpSuccess,
      TODO_LIST: handleTodoList,
    };
    return actions[action](response);
  };

  const handleRequest = async ({ submitFunction, formData, action }) => {
    try {
      const response = await submitFunction(formData);

      if (action) {
        return responseAction({ action, response });
      }

      return response;
    } catch (error) {
      const { status } = error.response;

      if (status === 400) {
        alert(MESSAGE.USER_ALREADY_EXIST);
      } else if (status === 401) {
        alert(MESSAGE.USER_NOT_MATCH);
      } else if (status === 404) {
        alert(MESSAGE.USER_NOT_FOUND);
      }

      setError(true);
    }
  };

  return {
    handleRequest,
    error,
  };
};

export default useRequest;
