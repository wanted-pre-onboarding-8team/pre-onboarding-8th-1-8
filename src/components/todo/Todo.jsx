import { Button, Input } from 'components/@common';
import { useInput } from 'hooks';
import tw from 'tailwind-styled-components';

import useTodo from '../../hooks/useTodo';
import { LogOutIcon, SendIcon } from '../../utils/Svg';
import TodoCard from './TodoCard';

const Container = tw.div`flex flex-col shadow-md items-center w-11/12 h-5/6 mx-auto rounded-xl gap-2 bg-slate-50 my-auto`;

const Header = tw.div`flex flex-row mt-1 w-11/12 justify-between items-end`;

const Title = tw.h2`font-extrabold text-4xl text-rose-400`;

const Content = tw.div`flex flex-col items-center rounded-xl w-11/12 h-full bg-slate-200 overflow-auto`;

const InputContainer = tw.form`flex flex-row w-10/12 mt-2 mb-3 justify-center items-center rounded-xl gap-1`;

const Todo = () => {
  const { todos, handleCreateToDo, handleUpdateTodo, handleDeleteTodo, handleLogOut } = useTodo();
  const todoInput = useInput({
    initialValue: '',
    required: true,
  });

  const handleOnSubmit = event => {
    event.preventDefault();
    handleCreateToDo(todoInput.value);
  };

  const handleOnClick = () => {
    handleLogOut();
  };

  return (
    <Container>
      <Header>
        <Title>Todo</Title>
        <Button className={'shadow-none text-rose-400 font-extrabold p-0 text-xl'} onClick={handleOnClick}>
          <LogOutIcon color={'#fb7185'} props={'w-9 h-9'} />
        </Button>
      </Header>
      <Content>
        {todos.map(todoData => (
          <TodoCard
            key={todoData.id}
            {...todoData}
            handleUpdateTodo={handleUpdateTodo}
            handleDeleteTodo={handleDeleteTodo}
          />
        ))}
      </Content>
      <InputContainer onSubmit={handleOnSubmit}>
        <Input type="text" {...todoInput} />
        <Button type="submit" className={'bg-rose-400 text-white shadow-md mx-auto w-22 h-12'}>
          <SendIcon props={'w-7 h-7 mx-auto'} color={'white'} />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Todo;
