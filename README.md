# ποΈ Todo List Best Practice

<p align="middle">
<img src="./screenshot.png" />
</p>

## πλͺ©μ°¨
---
- [ποΈ Todo List Best Practice](#οΈ-todo-list-best-pratice)
  - [πλͺ©μ°¨](#λͺ©μ°¨)
  - [π§π»βπ» νμ μκ°](#-νμ-μκ°)
  - [π μ¬μ© λΌμ΄λΈλ¬λ¦¬](#-μ¬μ©-λΌμ΄λΈλ¬λ¦¬)
  - [πββοΈ μ€νλ°©λ²](#οΈ-μ€νλ°©λ²)
  - [π‘ μ€κ³ μ λ΅](#-μ€κ³-μ λ΅)
  - [π Best Practice](#-best-practice)
    - [1. λ‘κ·ΈμΈ / νμκ°μ](#1-λ‘κ·ΈμΈ--νμκ°μ)
    - [Assignment1](#assignment1)
    - [Assignment2](#assignment2)
    - [Assignment 3](#assignment-3)
    - [Assignment 4](#assignment-4)
    - [Assignment5](#assignment5)

<br>

## π§π»βπ» νμ μκ°
----

|[μμ€ν](https://github.com/Limttugi)|[κΉν¬μ](https://github.com/dev-dong-su)|[μ λ―Όκ²½](https://github.com/minkyung00)|[μ΄κ±΄ν¬](https://github.com/leezer94)|[κΆν¨μ§](https://github.com/k1hyojin)|[νμμ€](https://github.com/HANSANGJUN)|[κΉμ μ](https://github.com/k-gardn)|
| :---: | :---: | :---: | :---: | :---: | :---:| :---: |
<img src="https://avatars.githubusercontent.com/u/67939901?v=4" width=200px alt="_"/> | <img src="https://avatars.githubusercontent.com/u/16986867?s=96&v=4" width=200px alt="_"/> | <img src="https://avatars.githubusercontent.com/u/80238096?v=4" width=200px alt="_"/> | <img src="https://avatars.githubusercontent.com/u/83988230?v=4" width=200px alt="_"> | <img src="https://avatars.githubusercontent.com/u/100255414?v=4" width=200px alt="_"> | <img src="https://avatars.githubusercontent.com/u/102160859?v=4" width=200px alt="_">|<img src="https://avatars.githubusercontent.com/u/108037773?v=4" width=200px alt="_">|

<br>

## π μ¬μ© λΌμ΄λΈλ¬λ¦¬
---
<div align="center">
<img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" />
<img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />

<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" />
<img src="https://img.shields.io/badge/ReactRouter-CA4245?style=for-the-badge&logo=react-router&logoColor=white" />

<img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" />
<img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white" />
</div>

<br>

## πββοΈ μ€νλ°©λ²
----
```
yarn start
```

<br>

## π‘ μ€κ³ μ λ΅
---
**Component**
* μμμ±μ κ°μ§ μ»΄ν¬λνΈλ λ³κ²½κ³Ό νμ₯μ μ μ°νκ³  μ¬μ¬μ©μ±μ΄ λκ² μ€κ³
* common μ»΄ν¬λνΈλ μ λκ²½λ‘λ₯Ό μ¬μ©ν΄ μ¬μ©μ μ©μ΄νκ² μ€κ³
* νλμ μ»΄ν¬λνΈμμ μ¬μ©μ κ²½νμ΄ λ€λ₯΄λ€λ©΄ λ€λ₯Έ μ»΄ν¬λνΈλ‘ λΆλ¦¬
* μ»΄ν¬λνΈμμ μνν΄μΌ νλ κΈ°λ₯μ Custom HookμΌλ‘ λΆλ¦¬


**Hooks**
* μ¬μ¬μ©μ±μ΄ λκ³  νλμ μ±μκ³Ό μ­ν μ ν  μ μλλ‘ μ€κ³


**Etc**
* μμλ€μ constants μ λ¦¬
* μ΄λ¦μ κ°κ°μ λͺ©μ κ³Ό μ­ν μ μκΈ° μ½κ² μμ±
* eslint, prettier μ¬μ©ν΄ μ½λ μ»¨λ²€μ μ€μ 

<br>

## π Best Practice
---
### 1. λ‘κ·ΈμΈ / νμκ°μ

- [x] / κ²½λ‘μ λ‘κ·ΈμΈ / νμκ°μ κΈ°λ₯μ κ°λ°ν΄μ£ΌμΈμ
  * νμ΄μ§ μμ μ΄λ©μΌ μλ ₯μ°½, λΉλ°λ²νΈ μλ ₯μ°½, μ μΆ λ²νΌμ΄ ν¬ν¨λ ννλ‘ κ΅¬μ±ν΄μ£ΌμΈμ
  * λ‘κ·ΈμΈ, νμκ°μμ λ³λμ κ²½λ‘λ‘ λΆλ¦¬ν΄λ λ¬΄λ°©ν©λλ€.

**Component**
* κ΅¬νμ νμν common μ»΄ν¬λνΈλ₯Ό μ μ λ° κ΅¬ν
* Account μ»΄ν¬λνΈμμ SignInκ³Ό SignUpμ μ νν΄μ λ λλ§νλ λ°©μμΌλ‘ μ€κ³
* νμ΄μ§ μ νμ νμ§μκ³  μ’λ μ’μ μ¬μ©μ κ²½νμ μ κ³΅ν  μ μλ μ₯μ 
```javascript
const Account = () => {
  const [accountMethod, setAccountMethod] = useState('signin');

  return (
    <Container>
      <Header>
        <Title>TODO</Title>
        <RadioContextProvider value={accountMethod} onChange={setAccountMethod}>
          <Radio value="signin">λ‘κ·ΈμΈ</Radio>
          <Radio value="signup">νμκ°μ</Radio>
        </RadioContextProvider>
      </Header>
      {accountMethod === 'signin' ? <SignUp /> : <SignIn />}
    </Container>
  );
};
```

**Hooks**
* useInput custom hookμΌλ‘ SignIn/SignUp μ»΄ν¬λνΈμ inputμ μ΄λ²€νΈμ κ°μ valid, μλ¬ λ©μμ§ λ±μ νΈλ€λ§
```javascript
const useInput = ({ initialValue, errorMessage, required, type }) => {
  const [value, setValue] = useState(initialValue);
  const [valid, setValid] = useState(true);
  const regexp = VALIDATIONS[type];

  const handleChange = ({ target: { value } }) => {
    setValid(!!value.match(regexp));
    setValue(value);
  };

  return {
    value,
    setValue,
    errorMessage,
    required,
    valid,
    onChange: handleChange,
  };
};

```

<br>

### Assignment1
- [x] μ΄λ©μΌκ³Ό λΉλ°λ²νΈμ μ ν¨μ± κ²μ¬κΈ°λ₯μ κ΅¬νν΄μ£ΌμΈμ
- [x] μ΄λ©μΌ μ‘°κ±΄: @ ν¬ν¨
- [x] λΉλ°λ²νΈ μ‘°κ±΄: 8μ μ΄μ
- [x] μλ ₯λ μ΄λ©μΌκ³Ό λΉλ°λ²νΈκ° μ μ‘°κ±΄μ λ§μ‘±ν  λλ§ λ²νΌμ΄ νμ±ν λλλ‘ ν΄μ£ΌμΈμ
* λ³΄μ μ μ€μ  μ¬μ©νκ³  κ³μ  μ΄λ©μΌκ³Ό ν¨μ€μλλ§κ³  νμ€νΈμ© μ΄λ©μΌ, ν¨μ€μλ μ¬μ©μ κΆμ₯λλ¦½λλ€.

**Component**
```javascript
const Input = ({ type, label, errorMessage, valid, ...rest }) => {
  return (
    <StyledContainer>
      <StyledInput type={type} {...rest} />
      <StyledLabel>{label}</StyledLabel>
      {!valid && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </StyledContainer>
  );
};
```
* Input μ»΄ν¬λνΈλ useInputμ validλ₯Ό λ³΄κ³  validνμ§ μλ€λ©΄ errorMessageλ₯Ό λ λλ§ 

```javascript
<Button
  type="submit"
  className={'mt-2 bg-rose-400 text-white shadow-md mx-auto w-24 h-12'}
  disabled={!form.email.valid || !form.password.valid}
>
```
* Button μ»΄ν¬λνΈλ κ° input validν΄μΌλ§ νμ±ν


**Hooks**
* inputμ μ±μμ΄ μλ useInputμμ κ°μ λ³νκ° μμ μ ν΄λΉ κ°μ΄ valid νμ§ μνμ§ κ²μ¬
```javascript
const useInput = ({ initialValue, errorMessage, required, type }) => {
  ...
  const handleChange = ({ target: { value } }) => {
    setValid(!!value.match(regexp));
    setValue(value);
  };
  ...
}
```

<br>


### Assignment2
- [x] λ‘κ·ΈμΈ APIλ₯Ό νΈμΆνκ³ , μ¬λ°λ₯Έ μλ΅μ λ°μμ λ /todo κ²½λ‘λ‘ μ΄λν΄μ£ΌμΈμ
- [x] λ‘κ·ΈμΈ APIλ λ‘κ·ΈμΈμ΄ μ±κ³΅νμ μ Response Bodyμ JWTλ₯Ό ν¬ν¨ν΄μ μλ΅ν©λλ€.
- [x] μλ΅λ°μ JWTλ λ‘μ»¬ μ€ν λ¦¬μ§μ μ μ₯ν΄μ£ΌμΈμ

**Api**
```javascript
export const client = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});
```
* axios μΈμ€ν΄μ€μ μ μ base urlμ .env νμΌλ‘ κ΄λ¦¬
```javascript
export const signUp = formData => client.post('/auth/signup', { email: formData.email, password: formData.password });

export const signIn = formData => client.post('/auth/signin', { email: formData.email, password: formData.password });
```
* formDataλ‘ emailκ³Ό passwordλ₯Ό λ°μ bodyμ λ£μ΄ post μμ²­

**Hooks**
```javascript
const useRequest = () => {
  ... 
  const handleSignInSuccess = response => {
    alert(MESSAGE.LOGIN_SUCCEED);
    setStorageValue(response.data[LOCAL_STORAGE.ACCESS_TOKEN]);
    navigate(ROUTES.TODO);
  };

  const handleSignUpSuccess = () => {
    alert(MESSAGE.SIGNIN_SUCCEED);
    navigate(ROUTES.HOME);
  };

  const responseAction = ({ action, response }) => {
    const actions = {
      SIGN_IN: handleSignInSuccess,
      SIGN_UP: handleSignUpSuccess,
      TODO_LIST: handleTodoList,
    };
    return actions[action](response);
  };

  const handleRequest = async ({ submitFunction, formData, action }) => {
    try {
      const response = await submitFunction(formData);

      if (action) {
        return responseAction({ action, response });
      }
    }
}
```
* λͺ¨λ  μμ²­κ³Ό μλ΅μ λν μ±μκ³Ό μ­ν μ κ°μ§λ useRequestμ μ€κ³ responseActionμ μλ΅μ΄νμ νλμ μ μνλ€
* SignInμ κ²½μ° μ±κ³΅ν Todo νμ΄μ§λ‘ SignUpμ κ²½μ° λ€μ /νμ΄μ§λ‘ λ¦¬λ€μ΄λ νΈ

<br>


### Assignment 3

- [x] λ‘κ·ΈμΈ μ¬λΆμ λ°λ₯Έ λ¦¬λ€μ΄λ νΈ μ²λ¦¬λ₯Ό κ΅¬νν΄μ£ΌμΈμ
- [x] λ‘μ»¬ μ€ν λ¦¬μ§μ ν ν°μ΄ μλ μνλ‘ `/` νμ΄μ§μ μ μνλ€λ©΄ `/todo` κ²½λ‘λ‘ λ¦¬λ€μ΄λ νΈ μμΌμ£ΌμΈμ
- [x] λ‘μ»¬ μ€ν λ¦¬μ§μ ν ν°μ΄ μλ μνλ‘ `/todo` νμ΄μ§μ μ μνλ€λ©΄ `/` κ²½λ‘λ‘ λ¦¬λ€μ΄λ νΈ μμΌμ£ΌμΈμ
```jsx
const PrivateRouter = () => {
  const { storageValue: accessToken } = useLocalStorage(LOCAL_STORAGE.ACCESS_TOKEN);

  return !accessToken ? <Navigate to={ROUTES.HOME} replace /> : <Outlet />;
};


const PublicRouter = () => {
  const { pathname } = useLocation();
  const { storageValue: accessToken } = useLocalStorage(LOCAL_STORAGE.ACCESS_TOKEN);

  if (pathname === ROUTES.HOME) {
    return accessToken ? <Navigate to={ROUTES.TODO} replace /> : <Outlet />;
  }

  return accessToken ? <Navigate to={ROUTES.HOME} replace /> : <Outlet />;
};
```

- `Private` / `Public` Router λ₯Ό κ΅¬νν΄ λ‘κ·ΈμΈ / λΉλ‘κ·ΈμΈ μ κ·Ό κ°λ₯ν λΌμ°νΈλ₯Ό κ΅¬λΆνμ΅λλ€.
- `λ‘κ·ΈμΈ`μ μλ§ μ κ·Ό κ°λ₯ν routeλ `PrivateRouterμ` νμ
- `λΉλ‘κ·ΈμΈ`μ μλ§ μ κ·Ό κ°λ₯ν routeλ `PublicRouterμ` νμ

<br>

### Assignment 4

- [x] λ¦¬μ€νΈ νμ΄μ§μλ ν¬λ λ¦¬μ€νΈμ λ΄μ©κ³Ό μλ£ μ¬λΆκ° νμλμ΄μΌ ν©λλ€.
- [x] λ¦¬μ€νΈ νμ΄μ§μλ μλ ₯μ°½κ³Ό μΆκ° λ²νΌμ΄ μκ³ , μΆκ° λ²νΌμ λλ₯΄λ©΄ μλ ₯μ°½μ λ΄μ©μ΄
      μλ‘μ΄ ν¬λ λ¦¬μ€νΈλ‘ μΆκ°λλλ‘ ν΄μ£ΌμΈμ

**useRequest.js**
```jsx
const handleRequest = async ({ submitFunction, formData, action }) => {
    try {
      const response = await submitFunction(formData);

      if (action) {
        return responseAction({ action, response });
      }

      return response;
    } catch (error) {
      const { status } = error.response;

      if (status === 400) {
        alert(MESSAGE.USER_ALREADY_EXIST);
      } else if (status === 401) {
        alert(MESSAGE.USER_NOT_MATCH);
      } else if (status === 404) {
        alert(MESSAGE.USER_NOT_FOUND);
      }

      setError(true);
    }
  };
```
- `handleRequest` ν¨μλ Todoμ μ λ°μ μΈ `CRUD` κ΄λ ¨ request μ handling ν΄μ€ μ¬μ¬μ©μ±μ λμΈ ν¨μμ΄λ©° `μνμ½λλ³ μλ¬νΈλ€λ§` λ‘μ§μ ν¬ν¨νκ³  μμ΅λλ€.
- `μλ¬ λ©μμ§`λ `μμ`λ‘ κ΄λ¦¬λκ³  μμ΅λλ€.
- `try` λ¬Έμμ `response`λ₯Ό return ν΄ useTodo hookμ μ¬μ©λΆμμ `responseλ₯Ό κΈ°λ°μΌλ‘ μλ°μ΄νΈλ todoλ₯Ό λ λλ§ ν΄μ€λλ€.`


**useTodo.js**
```jsx
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
```
- κ° μμ²­μ λ°λ₯Έ `handleRequest` μ `response` λ₯Ό κΈ°λ°μΌλ‘ setTodosλ₯Ό μ§ννμ¬ μλ‘μ΄ μ λ³΄λ₯Ό λ λλ§ μν΅λλ€.

### Assignment5

- [x] ν¬λ λ¦¬μ€νΈμ μμ , μ­μ  κΈ°λ₯μ κ΅¬νν΄μ£ΌμΈμ
- [x] ν¬λ λ¦¬μ€νΈμ κ°λ³ μμ΄ν μ°μΈ‘μ μμ λ²νΌμ΄ μ‘΄μ¬νκ³  ν΄λΉ λ²νΌμ λλ₯΄λ©΄ μμ λͺ¨λκ° νμ±νλκ³  ν¬λ λ¦¬μ€νΈμ λ΄μ©μ μμ ν  μ μλλ‘ ν΄μ£ΌμΈμ
- [x] μμ λͺ¨λμμλ κ°λ³ μμ΄νμ μ°μΈ‘μ μ μΆλ²νΌκ³Ό μ·¨μλ²νΌμ΄ νμλλ©° ν΄λΉ λ²νΌμ ν΅ν΄μ μμ  λ΄μ©μ μ μΆνκ±°λ μμ μ μ·¨μν  μ μλλ‘ ν΄μ£ΌμΈμ
- [x] ν¬λ λ¦¬μ€νΈμ κ°λ³ μμ΄ν μ°μΈ‘μ μ­μ λ²νΌμ΄ μ‘΄μ¬νκ³  ν΄λΉ λ²νΌμ λλ₯΄λ©΄ ν¬λ λ¦¬μ€νΈκ° μ­μ λλλ‘ ν΄μ£ΌμΈμ

```javascript 
        {todos.map(todoData => (
          <TodoCard
            key={todoData.id}
            {...todoData}
            handleUpdateTodo={handleUpdateTodo}
            handleDeleteTodo={handleDeleteTodo}
          />
        ))}
```
* κ° TodoCardλ λΆλͺ¨ μ»΄ν¬λνΈ Todoμ μλ useTodoμμ handleUpdateTodo, handleDeleteTodoλ₯Ό λ°μ κ°κ°μμ μ μ΄λ²€νΈλ₯Ό νΈλ€λ§

```jsx
  if (isEdit) {
    return (
      <InputContainer onSubmit={handleOnSubmit}>
    ...
      </InputContainer>
    );
  }

  return (
    <Container>
      ....
    </Container>
  );
};
```
* early returnμΌλ‘ νμ¬ μμ μ€μΈμ§ μλμ§μ λ°λΌ λ€λ₯΄κ² λ λλ§

```javascript 
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
```
* κ°κ° μ μμ  μ­μ  μμ²­μ useTodoμμ μ²λ¦¬ λ° λ°μ