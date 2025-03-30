/**
 * <Routes>는 여러 개의  <Route>를 감싸서 각 URL 경로에 맞는 컴포넌트를 렌더링
 * <Routes>는 하위 <Route> 중 일치하는 path를 가진 <Route>를 실행하고 나머지 <Route>는 무시  
 */
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
    );
}

export default MainRoutes;