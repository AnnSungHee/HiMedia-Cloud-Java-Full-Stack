import { Link, Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <>
            <h1>게시판 앱</h1>
            <Link to="/">목록</Link>
            <hr />
            <Outlet/>
        </>
    );
}