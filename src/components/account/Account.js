import tw from 'tailwind-styled-components';

import RadioGroup from '../RadioGroup';
import Radio from '../common/Radio';
import SignIn from './SignUp';
import SignUp from './SignIn';
import useAccountMethod from '../../hooks/useAccountMethod';

const Container = tw.div`flex flex-col shadow-md items-center w-11/12 h-5/6 mx-auto rounded-xl gap-2 bg-slate-50 my-auto`;

const Header = tw.div`flex flex-col items-center gap-5 w-full shadow-md p-4 rounded-xl`;

const Title = tw.h2`text-7xl text-rose-400`;

const Account = () => {
  const { accountMethod, setAccountMethod } = useAccountMethod('signin');

  return (
    <Container>
      <Header>
        <Title>TODO</Title>
        <RadioGroup value={accountMethod} onChange={setAccountMethod}>
          <Radio value="signin">로그인</Radio>
          <Radio value="signup">회원가입</Radio>
        </RadioGroup>
      </Header>
      {accountMethod === 'signin' ? <SignUp /> : <SignIn />}
    </Container>
  );
};

export default Account;
