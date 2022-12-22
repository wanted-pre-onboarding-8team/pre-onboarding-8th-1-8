import { signIn } from 'apis/auth';
import { Button, Input } from 'components/@common';
import { MESSAGE } from 'constants';
import { useInput, useRequest } from 'hooks';
import tw from 'tailwind-styled-components';

const Container = tw.form`flex flex-col w-10/12 h-full justify-center pb-10 items-center rounded-xl gap-6`;

const SignIn = () => {
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
  };

  const handleOnSubmit = event => {
    event.preventDefault();
    handleRequest({
      submitFunction: signIn,
      formData: { email: form.email.value, password: form.password.value },
      action: 'SIGN_IN',
    });
  };

  return (
    <Container onSubmit={handleOnSubmit}>
      <Input type="email" label="Email" {...form.email} />
      <Input type="password" label="Password" {...form.password} />
      <Button
        type="submit"
        className={'mt-2 bg-rose-400 text-white shadow-md mx-auto w-24 h-12'}
        disabled={!form.email.valid || !form.password.valid}
      >
        SignIn
      </Button>
    </Container>
  );
};

export default SignIn;
