import React from 'react';
import tw from 'tailwind-styled-components';
import {signIn} from '../../apis/auth';
import useInput from '../../hooks/useInput';
import useRequest from '../../hooks/useRequest';
import Button from '../common/Button';
import Input from '../common/Input';

const Container = tw.form`flex flex-col w-10/12 h-full justify-center pb-10 items-center rounded-xl gap-6`;

const SignUp = () => {
  const {handleRequest} = useRequest();
  const form = {
    email: useInput({
      initialValue: '',
      errorMessage: '이메일 형식이 올바르지 않습니다.',
      pattern: 'email',
      required: true,
    }),
    password: useInput({
      initialValue: '',
      pattern: 'password',
      errorMessage: '비밀번호가 8자 이상인지 확인해 주세요.',
      required: true,
    }),
  };

  const handleOnSubmit = event => {
    event.preventDefault();
    handleRequest({
        submitFunction: signIn,
        formData: {email: form.email.value, password: form.password.value},
        action: 'LOGIN',
      }
    )
  }

  return (
    <Container onSubmit={handleOnSubmit}>
      <Input type="email" label="Email" {...form.email} />
      <Input type="password" label="Password" {...form.password} />
      <Button
        type="submit"
        className={'mt-2 bg-rose-400 text-white shadow-md mx-auto w-24 h-12'}
        disabled={!form.email.valid || !form.password.valid}
      >
        Login
      </Button>
    </Container>
  );
};

export default SignUp;
