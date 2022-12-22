import { Button, Input } from 'components/@common';
import { useInput } from 'hooks';
import { useState } from 'react';
import tw from 'tailwind-styled-components';

import { DeleteIcon, EditIcon, SendIcon } from '../../utils/Svg';

const Container = tw.div`flex flex-row rounded-xl px-3 py-6 shadow-md my-4 h-24 w-11/12 bg-white gap-2 justify-between items-center`;

const InputContainer = tw.form`flex flex-row rounded-xl px-3 py-6 shadow-md my-4 h-24 w-11/12 bg-white gap-2 justify-between items-center`;

const ButtonContainer = tw.div`flex flex-row gap-1`;

const Checkbox = tw.input`w-7 h-7 accent-rose-500 peer`;

const Todo = tw.p`peer-checked:line-through overflow-hidden text-slate-600`;

const TodoCard = ({ id, todo, isCompleted, handleUpdateTodo, handleDeleteTodo }) => {
  const [isEdit, setIsEdit] = useState(false);
  const editTodo = useInput({
    initialValue: todo,
    required: true,
  });

  const handleOnChange = event => {
    event.preventDefault();
    handleUpdateTodo({ id: id, isCompleted: !isCompleted, todo: editTodo.value });
  };

  const handleOnSubmit = event => {
    event.preventDefault();
    handleUpdateTodo({ id: id, isCompleted: isCompleted, todo: editTodo.value });
    setIsEdit(pre => !pre);
  };

  const editOnClicke = () => {
    setIsEdit(pre => !pre);
  };

  return (
    <>
      {isEdit ? (
        <InputContainer onSubmit={handleOnSubmit}>
          <Input type="text" {...editTodo} />
          <Button type="submit" className={'bg-rose-400 text-white shadow-md mx-auto w-22 h-12'}>
            <SendIcon props={'w-7 h-7 mx-auto'} color={'white'} />
          </Button>
        </InputContainer>
      ) : (
        <Container>
          <Checkbox type="checkbox" checked={isCompleted} onChange={handleOnChange} />
          <Todo>{todo}</Todo>
          <ButtonContainer>
            <Button onClick={editOnClicke} className={' bg-rose-50'}>
              <EditIcon color={'#fb7185'} props={'h-6 w-4'} />
            </Button>
            <Button onClick={handleDeleteTodo(id)} className={'text-white bg-rose-400'}>
              <DeleteIcon color={'white'} props={'h-6 w-4'} />
            </Button>
          </ButtonContainer>
        </Container>
      )}
    </>
  );
};

export default TodoCard;
