// App.jsx
import { Routes, Route, Link } from 'react-router-dom';
import App_copy from './components/App copy';
import AddEventHandelr from './components/addEventHandler/App'
import ControlPanel from './components/addEventHandler/ControlPanel'
// import About from './components/About';
// import StateExample from './components/useState/StateExample';

function App() {
  return (
    <>
      <nav>
        <Link to="/">홈</Link> | {" "}
        <Link to="/exapmle">소개</Link> | {" "}
        <Link to="/addEventHandler">01. 이벤트 핸들러 추가</Link> | {" "}
        <Link to="/ControlPanel">ControlPanel</Link> | {" "}
        {/* <Link to="/state">상태 예제</Link> */}
      </nav>

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/exapmle" element={<App_copy />} />
        <Route path="/addEventHandler" element={<AddEventHandelr />} />
        <Route path="/ControlPanel" element={<ControlPanel />} />
      </Routes>
    </>
  );
}

export default App;
