import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { createTodo, deleteTodo, getTodo, updateTodo } from '../apis/todo';
import useLocalStorage from './useLocalStorage';
import useRequest from './useRequest';

const useTodo = () => {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);
  const { handleRequest } = useRequest();
  const { storageValue, deleteStorageValue } = useLocalStorage('access_token');

  useEffect(() => {
    handleGetTodo();
  }, []);

  const handleGetTodo = () => {
    setTodos(handleRequest({ submitFunction: getTodo, formData: storageValue, action: 'TODO_LIST' }));
  };

  const handleCreateToDo = todo => {
    handleRequest({
      submitFunction: createTodo,
      formData: { todo: todo, accessToken: storageValue },
    });
  };

  const handleUpdateTodo = todo => {
    handleRequest({
      submitFunction: updateTodo,
      formData: { ...todo, accessToken: storageValue },
    });
  };

  const handleDeleteTodo = id => {
    handleRequest({ submitFunction: deleteTodo, formData: { id: id, accessToken: storageValue }, action: 'TODO_LIST' });
  };

  const handleLogOut = () => {
    deleteStorageValue();
    navigate('/');
  };

  return {
    todos,
    handleGetTodo,
    handleCreateToDo,
    handleUpdateTodo,
    handleDeleteTodo,
    handleLogOut,
  };
};

export default useTodo;
