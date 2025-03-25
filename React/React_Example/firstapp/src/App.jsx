// App.jsx
import { Routes, Route, Link } from 'react-router-dom';
import App_copy from './components/App copy';
// import About from './components/About';
// import StateExample from './components/useState/StateExample';

function App() {
  return (
    <>
      <nav>
        <Link to="/">홈</Link> | {" "}
        <Link to="/exapmle">소개</Link> | {" "}
        {/* <Link to="/state">상태 예제</Link> */}
      </nav>

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/exapmle" element={<App_copy />} />
        {/* <Route path="/state" element={<StateExample />} /> */}
      </Routes>
    </>
  );
}

export default App;
