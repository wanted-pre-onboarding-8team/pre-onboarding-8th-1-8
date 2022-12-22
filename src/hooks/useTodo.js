import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTodo, deleteTodo, getTodo, updateTodo } from '../apis/todo';
import useLocalStorage from './useLocalStorage';
import useRequest from './useRequest';

const useTodo = () => {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);
  const { handleRequest, toDoResponse} = useRequest();
  const { storageValue, deleteStorageValue } = useLocalStorage('access_token');

  useEffect(() => {
    handleGetTodo();
  }, [todos]);

  const handleGetTodo = () => {
    console.log(toDoResponse);
    handleRequest({ submitFunction: getTodo, formData: storageValue, action: 'TODO_LIST' })
    setTodos(toDoResponse);
  };

  const handleCreateToDo = todo => {
    handleRequest({
      submitFunction: createTodo, formData: { todo: todo, accessToken: storageValue },
    }).then(handleGetTodo);
  };

  const handleUpdateTodo = todo => {
    handleRequest({
      submitFunction: updateTodo, formData: { ...todo, accessToken: storageValue },
    }).then(handleGetTodo);
  };

  const handleDeleteTodo = id => {
    handleRequest({ submitFunction: deleteTodo, formData: { id: id, accessToken: storageValue } }).then(handleGetTodo);
  };

  const handleLogOut = () => {
    deleteStorageValue();
    navigate('/');
  };

  return {
    todos, handleCreateToDo, handleUpdateTodo, handleDeleteTodo, handleLogOut,
  };
};

export default useTodo;
