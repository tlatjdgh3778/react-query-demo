# React Query

## 1. React Query?

[**React Query**](https://react-query-v3.tanstack.com/)는 리액트 애플리케이션에서 서버 상태(**Server State**)를 가져오고, 캐싱, 동기화, 업데이트 작업을 쉽게 만들어주는 라이브러리이다.

---

공식 문서에서 기존 상태관리 라이브러리(redux, mobX..)는 비동기 또는 **Server State** 작업에는 그다지 좋지않다고 한다.

예를 들어 redux는 API 비동기 통신 라이브러리가 아니라 전역 상태 관리 라이브러리임에도 불구하고, 상태를 관리하는 코드보다 **redux-saga**, **redux-thunk**와 같은 코드가 훨씬 더 많이 차지하고 있다.

**React Query** 를 사용하면 **Server State**와 **Client State**를 분리하고 Store에서는 전역 상태를 저장하고 관리하는 역할만을 수행하도록 할 수 있다.

## Server State

공식 문서에서 **Server State**를 다음과 같이 설명하고 있다.

-   Client에서 제어하고나 소유하지 않는 위치에 원격으로 유지된다.
-   fetching, updating에 비동기 API가 필요하다.
-   공유 소유권(shared ownership)을 의미하고 사용자가 모르는 사이에 변경될 수 있다.
-   신경을 쓰지 않는다면 잠재적으로 **out of date** 가 될 가능성이 있다.

**React Query** 를 사용하면 아래와 같이 **Server State** 를 다룰 때 발생할 수 있는 문제들을 간단하게 해결할 수 있다.

1. 캐싱
2. 동일한 데이터에 중복 호출 제거
3. **out of date** 를 파악하고, 백그라운드에서 업데이트 가능
4. 가능한 한 빨리 데이터 업데이트를 반영
5. 페이지네이션, lazy loading 데이터의 성능 최적화
6. **Server State** 의 메모리 및 GC 관리

##
