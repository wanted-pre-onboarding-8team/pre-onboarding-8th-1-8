import MESSAGE from 'constants/ErrorMessage';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useLocalStorage from './useLocalStorage';

const useRequest = () => {
  const navigate = useNavigate();
  const { setStorageValue } = useLocalStorage('access_token');
  const [toDoResponse, setToDoResponse] = useState([]);
  const [error, setError] = useState(false);

  const handleTodoList = response => {
    setToDoResponse(response['data']);
  };

  const handleSignInSuccess = response => {
    alert(MESSAGE.LOGIN_SUCCEED);
    setStorageValue(response.data['access_token']);
    navigate('/todo');
  };

  const handleSignUpSuccess = () => {
    alert(MESSAGE.SIGNIN_SUCCEED);
    navigate('/');
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
      console.log('1');
      responseAction({ action, response });
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
    toDoResponse,
  };
};

export default useRequest;
