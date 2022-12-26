import { client } from '.';

export const createTodo = ({ todo }) => client.post('/todos', { todo: todo });

export const getTodo = () => client.get('/todos');

export const updateTodo = formData =>
  client.put(`/todos/${formData.id}`, {
    todo: formData.todo,
    isCompleted: formData.isCompleted,
  });

export const deleteTodo = formData => client.delete(`/todos/${formData.id}`);
