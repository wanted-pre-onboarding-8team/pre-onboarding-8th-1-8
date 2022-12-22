import MESSAGE from 'constants/ErrorMessage';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useLocalStorage from './useLocalStorage';

const useRequest = () => {
  const navigate = useNavigate();
  const { setValue } = useLocalStorage('access_token');
  const [error, setError] = useState(false);

  const loginRequest = response => {
    alert(MESSAGE.LOGIN_SUCCEED);
    setValue(response.data['access_token']);
    navigate('/todo');
  };

  const joinRequest = () => {
    alert(MESSAGE.SIGNIN_SUCCEED);
    navigate('/');
  };

  const responseAction = ({ action, response }) => {
    const actions = {
      LOGIN: loginRequest,
      JOIN: joinRequest,
    };
    return actions[action](response);
  };

  const handleRequest = ({ submitFunction, formData, action }) =>
    submitFunction(formData)
      .then(response => responseAction({ action, response }))
      .catch(error => {
        if (error.response.status === 400) {
          alert(MESSAGE.USER_ALREADY_EXIST);
        } else if (error.response.status === 401) {
          alert(MESSAGE.USER_NOT_MATCH);
        } else if (error.response.status === 404) {
          alert(MESSAGE.USER_NOT_FOUND);
        } else if (error.request) {
          // 요청이 잘못된 경우
          console.log(error.request);
          setError(true);
        }
      });

  return {
    handleRequest,
    error,
  };
};

export default useRequest;
