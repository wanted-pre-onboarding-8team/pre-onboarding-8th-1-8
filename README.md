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
* 상수들은 contants폴더에 정리
* 이름은 각각의 목적과 역할을 알기 쉽게 작성
* eslint, pretter를 사용해 코드 컨벤션 설정

<br>

## 🏆 Best Pratice
---
