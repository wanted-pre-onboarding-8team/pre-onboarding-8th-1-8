import tw from 'tailwind-styled-components';

import { signUp } from '../../apis/auth';
import useInput from '../../hooks/useInput';
import useRequest from '../../hooks/useRequest';
import Button from '../common/Button';
import Input from '../common/Input';

const Container = tw.form`flex flex-col w-10/12 h-full justify-center items-center rounded-xl gap-4`;

const SignIn = () => {
  const { handleRequest } = useRequest();
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
    pwdCheck: useInput({
      initialValue: '',
      errorMessage: '비밀번호가 같지 않습니다.',
      required: true,
    }),
  };

  const handleOnSubmit = event => {
    event.preventDefault();
    handleRequest({
      submitFunction: signUp,
      formData: { email: form.email.value, password: form.password.value },
      action: 'JOIN',
    });
  };

  return (
    <Container onSubmit={handleOnSubmit}>
      <Input type="email" label="Email" {...form.email} />
      <Input type="password" label="Password" {...form.password} />
      <Input type="password" label="Password Check" {...form.pwdCheck} pattern={form.password.value} />
      <Button
        type="submit"
        className={'bg-rose-400 text-white shadow-md mx-auto w-24 h-12'}
        disabled={!form.email.valid || !form.password.valid || !form.pwdCheck.valid}
      >
        Join
      </Button>
    </Container>
  );
};

export default SignIn;
