import { signUp } from 'apis/auth';
import { Button, Input } from 'components/@common';
import { MESSAGE } from 'constants';
import { useInput, useRequest } from 'hooks';
import tw from 'tailwind-styled-components';

const Container = tw.form`flex flex-col w-10/12 h-full justify-center items-center rounded-xl gap-4`;

const SignUp = () => {
  const { handleRequest } = useRequest();
  const form = {
    email: useInput({
      initialValue: '',
      type: 'email',
      errorMessage: MESSAGE.EMAIL_ERROR,
      required: true,
    }),
    password: useInput({
      initialValue: '',
      type: 'password',
      errorMessage: MESSAGE.PASSWORD_ERROR,
      required: true,
    }),
    pwdCheck: useInput({
      initialValue: '',
      type: 'password',
      errorMessage: MESSAGE.PASSWORD_CHECK_ERROR,
      required: true,
    }),
  };

  const handleOnSubmit = event => {
    event.preventDefault();

    handleRequest({
      submitFunction: signUp,
      formData: { email: form.email.value, password: form.password.value },
      action: 'SIGN_UP',
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
        SignUp
      </Button>
    </Container>
  );
};

export default SignUp;
