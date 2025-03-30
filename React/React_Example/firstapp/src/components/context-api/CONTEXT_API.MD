# Context API
- React에서 컴포넌트 트리 전체에 걸쳐 데이터를 쉽게 전달하기 위해 제공되는 기능.
- 일반적으로, 부모에서 자식으로만 데이터를 전달할 수 있지만, Context API를 사용하면 중간 컴포넌트들을 거치지 않고 전역적으로 데이터를 전달 가능.
- 전역 상태 관리가 필요할 때 사용하는 기능
    - 사용자 정보, 테마 설정, 인증 상태 등
- 여러 컴포넌트에서 공통으로 사용하는 데이터를 저장하고 사용 가능

- React.createContext()
    - Context 객체를 생성.
    - 생성된 Context는 데이터가 저장되는 공간을 제공.

- Provider
    - Context 데이터를 제공하는 컴포넌트
    - Context의 값을 설정. (value 속성)
    - 하위에 있는 모든 컴포넌트는 Provider를 통해 Context 데이터에 접근

- useContext
    - 하위 컴포넌트에서 Context 데이터에 접근하기 위해 사용하는 React 훅