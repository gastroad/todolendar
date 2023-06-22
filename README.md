# todolendar 포트폴리오

## 포트폴리오 개요

"todolendar"는 calendar를 통해 날짜별로 todoList를 관리하는 서비스입니다.

## 개발 서버 실행 방법

### 개발 환경 설정

개발 환경에 `nodemon`이 설치되어 있지 않은 경우, 다음 명령을 실행하여 `nodemon`을 설치합니다

```
npm install -g nodemon
```

### 개발 서버 실행

터미널을 열고 다음 명령을 실행하여 개발 서버를 실행합니다

```
sh dev.sh
```

위의 명령어는 `dev.sh` 스크립트 파일을 실행하여 개발 서버를 시작합니다.


---

### todolendar-back

todolendar-front를 개발하기 위해 Node로 작성된 웹 서버입니다.
mock 데이터를 crud 하기 위한 웹 서버이므로 다소 오류가 있을 수 있습니다.

### todolendar-front

React, TypeScript 를 사용해서 개발되었습니다.