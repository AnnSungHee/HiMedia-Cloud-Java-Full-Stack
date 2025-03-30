/**
 * 중첩된 라우트에서 기본 경로로 표시할 페이지를 설정  
 */
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function RouteIndex() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                {/* 기본 페이지 */}
                <Route path="about" element={<About/>}/>
            </Route>
        </Routes>
    );
}

export default RouteIndex;