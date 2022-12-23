import { createTodo, deleteTodo, getTodo, updateTodo } from 'apis/todo';
import { LOCAL_STORAGE, ROUTES } from 'constants';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useLocalStorage from './useLocalStorage';
import useRequest from './useRequest';

const useTodo = () => {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);
  const { handleRequest } = useRequest();
  const { storageValue, deleteStorageValue } = useLocalStorage(LOCAL_STORAGE.ACCESS_TOKEN);

  useEffect(() => {
    handleGetTodo();
  }, []);

  const handleGetTodo = async () => {
    setTodos(await handleRequest({ submitFunction: getTodo, formData: storageValue, action: 'TODO_LIST' }));
  };

  const handleCreateToDo = async todo => {
    const { data: newTodo } = await handleRequest({
      submitFunction: createTodo,
      formData: { todo: todo, accessToken: storageValue },
    });

    setTodos([...todos, newTodo]);
  };

  const handleUpdateTodo = async todo => {
    const todoCopied = [...todos];

    const id = todo.id;
    const index = todos.findIndex(todo => todo.id === id);

    const { data: modifiedTodo } = await handleRequest({
      submitFunction: updateTodo,
      formData: { ...todo, accessToken: storageValue },
    });

    todoCopied.splice(index, 1, modifiedTodo);
    setTodos(todoCopied);
  };

  const handleDeleteTodo = async id => {
    await handleRequest({
      submitFunction: deleteTodo,
      formData: { id: id, accessToken: storageValue },
    });

    const newTodoList = todos.filter(todo => todo.id !== id);

    setTodos(newTodoList);
  };

  const handleLogOut = () => {
    deleteStorageValue();
    navigate(ROUTES.HOME);
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
