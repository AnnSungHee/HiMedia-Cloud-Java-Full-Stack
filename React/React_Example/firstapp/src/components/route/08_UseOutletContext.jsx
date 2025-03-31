/**
 * - React Router에서 제공하는 특수 훅
 * - 중첩된 라우트 구조에서 부모 컴포넌트가 <Outlet/> 을 통해 전달한 데이터를
 *   하위 라우트 컴포넌트들이 사용할 수 있도록 전달
 * - React의 Context API와 유사하지만, 특정 라우트 구조 내에서만 데이터를 
 *   공유하는데 사용
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ParentComponent from "./08_ParentComponent";
import ChildComponent from "./08_ChildComponent";
import GrandchildComponent from "./08_GrandchildComponent";

function UseOutletContext() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="parent" element={<ParentComponent/>}>
                    <Route path="child" element={<ChildComponent/>}>
                        <Route path="grandchild" element={<GrandchildComponent/>}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default UseOutletContext;