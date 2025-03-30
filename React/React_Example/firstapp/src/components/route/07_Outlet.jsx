/**
 * 중첩된 라우트를 렌더링할 때 자식 경로가 표시될 위치를 지정 
 */
import { Routes, Route, Outlet } from "react-router-dom";

function Outlet() {
    return (
        <div>
            <h1>Main Layout</h1>
            {/* 자식 컴포넌트가 여기에 렌더링 */}
            <Outlet/> 
        </div>
    );
}
export default Outlet;

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="about" element={<About/>}/>
                <Route path="contact" element={<Contact/>}/>
            </Route>
        </Routes>
    );
}