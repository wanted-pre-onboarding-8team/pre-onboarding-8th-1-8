import { Radio } from 'components/@common';
import { RadioContextProvider } from 'contexts/RadioContextProvider';
import { useState } from 'react';
import tw from 'tailwind-styled-components';

import SignUp from './SignIn';
import SignIn from './SignUp';

const Container = tw.div`flex flex-col shadow-md items-center w-11/12 h-5/6 mx-auto rounded-xl gap-2 bg-slate-50 my-auto`;
const Header = tw.div`flex flex-col items-center gap-5 w-full shadow-md p-4 rounded-xl`;
const Title = tw.h2`text-7xl text-rose-400`;

const Account = () => {
  const [accountMethod, setAccountMethod] = useState('signin');

  return (
    <Container>
      <Header>
        <Title>TODO</Title>
        <RadioContextProvider value={accountMethod} onChange={setAccountMethod}>
          <Radio value="signin">로그인</Radio>
          <Radio value="signup">회원가입</Radio>
        </RadioContextProvider>
      </Header>
      {accountMethod === 'signin' ? <SignUp /> : <SignIn />}
    </Container>
  );
};

export default Account;
