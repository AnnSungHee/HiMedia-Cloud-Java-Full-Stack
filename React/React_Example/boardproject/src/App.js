import { useState } from "react";

import Header from "./Header";
import Menu from "./Menu";
import Create from "./Create";
import List from "./List";

function App() {
  let content = null;
  const [mode, setMode] = useState("MAIN");

  const [postlist, setList] = useState([
    { id: 1, author: "안성희", title: "하이하이", body: "때잉" },
    { id: 2, author: "안성희", title: "상태변수 싫어", body: "때잉" },
  ]);

  const menuList = [
    { id: 1, title: "글쓰기", mode: "CREATE" },
    { id: 2, title: "목록으로", mode: "LIST" },
  ];

  switch (mode) {
    case "MAIN":
      break;
    case "CREATE":
      console.log("gkdlgkdl");
      content = <Create />;
      break;
    case "LIST":
      content = <List postlist={postlist} />;
      break;
    default:
      break;
  }

  return (
    <>
      <Header
        changeMode={() => {
          setMode("MAIN");
          console.log("MAIN");
        }}
      />
      <Menu
        menuList={menuList}
        changeMode={(mode) => {
          setMode(mode);
          console.log(mode);
        }}
      ></Menu>
      {content}
    </>
  );
}

export default App;
