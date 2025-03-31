// 기존의 Header, Menu 컴포넌트를 합쳐서 반환
import {Link, Outlet} from 'react-router-dom';
import { useState } from 'react';

function MainLayout() {
  const menuList = [
    { id: 1, title: "글쓰기", mode: "CREATE", link: "/write" },
    { id: 2, title: "목록으로", mode: "LIST", link: "/list" }
  ];

  const [postList, setPostList] = useState([
    { id: 1, author: "안성희", title: "하이하이", body: "때잉" },
    { id: 2, author: "안성희", title: "상태변수 싫어", body: "때잉" }
  ]);
  
  return (
    <>
      <Link to="/">
        <h1>글목록</h1>
      </Link>
      <hr />
      {menuList.map((menu) => (
        <Link key={menu.id} to={menu.link}>
          {menu.title} &nbsp; &nbsp;
        </Link>
      ))}
      <hr />
      <Outlet context={{postList, setPostList}}/>
    </>
  );
}
export default MainLayout;
