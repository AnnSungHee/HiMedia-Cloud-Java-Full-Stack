import { Route, Routes } from "react-router-dom";

import MainLayout from "./components/Route_MainLayout";
import CreatePost from "./components/Route_CreatePost";
import ListPost from "./components/Route_ListPost";
import ReadPost from "./components/Route_ReadPost";
import EditPost from "./components/Route_EditPost";

function App_Route() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route path="write" element={<CreatePost/>}/>
                <Route path="list" element={<ListPost/>}>
                    <Route path=":postId" element={<ReadPost/>}/>
                    <Route path="edit/:postId" element={<EditPost/>}/>
                </Route>
            </Route>
        </Routes>
    );
}
export default App_Route;