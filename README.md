# 🗓️ Todo List Best Pratice

## 📄목차
---
- [🗓️ Todo List Best Pratice](#️-todo-list-best-pratice)
  - [📄목차](#목차)
  - [🧑🏻‍💻 팀원 소개](#-팀원-소개)
  - [📚 사용 라이브러리](#-사용-라이브러리)
  - [🏃‍♂️ 실행방법](#️-실행방법)
  - [💡 설계 전략](#-설계-전략)
  - [🏆 Best Pratice](#-best-pratice)

<br>

## 🧑🏻‍💻 팀원 소개
----

|[임준혁](https://github.com/Limttugi)|[김희수](https://github.com/dev-dong-su)|[신민경](https://github.com/minkyung00)|[이건희](https://github.com/leezer94)|[권효진](https://github.com/k1hyojin)|[한상준](https://github.com/HANSANGJUN)|[김정원](https://github.com/k-gardn)|
| :---: | :---: | :---: | :---: | :---: | :---:| :---: |
<img src="https://avatars.githubusercontent.com/u/67939901?v=4" width=200px alt="_"/> | <img src="https://avatars.githubusercontent.com/u/16986867?s=96&v=4" width=200px alt="_"/> | <img src="https://avatars.githubusercontent.com/u/80238096?v=4" width=200px alt="_"/> | <img src="https://avatars.githubusercontent.com/u/83988230?v=4" width=200px alt="_"> | <img src="https://avatars.githubusercontent.com/u/100255414?v=4" width=200px alt="_"> | <img src="https://avatars.githubusercontent.com/u/102160859?v=4" width=200px alt="_">|<img src="https://avatars.githubusercontent.com/u/108037773?v=4" width=200px alt="_">|

<br>

## 📚 사용 라이브러리
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

## 🏃‍♂️ 실행방법
----
```
yarn start
```

<br>

## 💡 설계 전략
---
**Component**
* 원자성을 가진 컴포넌트는 변경과 확장에 유연하고 재사용성이 높게 설계
* common 컴포넌트는 절대경로를 사용해 사용에 용이하게 설계
* 하나의 컴포넌트에서 사용자 경험이 다르다면 다른 컴포넌트로 분리
* 컴포넌트에서 수행해야 하는 기능은 Custom Hook으로 분리


**Hooks**
* 재사용성이 높고 하나의 책임과 역할을 할 수 있도록 설계


**Etc**
* 상수들은 constants 정리
* 이름은 각각의 목적과 역할을 알기 쉽게 작성
* eslint, prettier 사용해 코드 컨벤션 설정

<br>

## 🏆 Best Practice
---

### Assignment 3

- [x] 로그인 여부에 따른 리다이렉트 처리를 구현해주세요
- [x] 로컬 스토리지에 토큰이 있는 상태로 `/` 페이지에 접속한다면 `/todo` 경로로 리다이렉트 시켜주세요
- [x] 로컬 스토리지에 토큰이 없는 상태로 `/todo` 페이지에 접속한다면 `/` 경로로 리다이렉트 시켜주세요
```

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

- `Private` / `Public` Router 를 구현해 로그인 / 비로그인 접근 가능한 라우트를 구분했습니다.
- `로그인`시 에만 접근 가능한 route는 `PrivateRouter의` 하위
- `비로그인`시 에만 접근 가능한 route는 `PublicRouter의` 하위


### Assignment 4

- [x] 리스트 페이지에는 투두 리스트의 내용과 완료 여부가 표시되어야 합니다.
- [x] 리스트 페이지에는 입력창과 추가 버튼이 있고, 추가 버튼을 누르면 입력창의 내용이
      새로운 투두 리스트로 추가되도록 해주세요

**useRequest.js**
```
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
- `handleRequest` 함수는 Todo의 전반적인 `CRUD` 관련 request 을 handling 해줘 재사용성을 높인 함수이며 `상태코드별 에러핸들링` 로직을 포함하고 있습니다.
- `에러 메시지`는 `상수`로 관리되고 있습니다.
- `try` 문에서 `response`를 return 해 useTodo hook의 사용부에서 `response를 기반으로 업데이트된 todo를 렌더링 해줍니다.`


**useTodo.js**
```
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
- 각 요청에 따른 `handleRequest` 의 `response` 를 기반으로 setTodos를 진행하여 새로운 정보를 렌더링 시킵니다.