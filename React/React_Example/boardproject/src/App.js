import { useState } from "react";

import Header from "./components/Header";
import Menu from "./components/Menu";
import Create from "./components/Create";
import List from "./components/List";
import Read from "./components/Read";

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

  const [readingId, setReadingId] = useState(0);

  switch (mode) {
    case "MAIN":
      break;
    case "CREATE":
      content = (
        <Create
          onCreatePost={(newPost) => {
            const newId = postlist[postlist.length - 1].id + 1;
            const newPostInfo = {
              id: newId,
              author: newPost.author,
              title: newPost.title,
              body: newPost.body,
            };
            const newPostList = [...postlist, newPostInfo];
            setList(newPostList);
            setMode("LIST");
          }}
        />
      );
      break;
    case "LIST":
      content = (
        <List
          postlist={postlist}
          onChangeMode={(id) => {
            setMode("READ");
            console.log("글 눌렀을떄의 매개변수로 넘어온 id 값 : " + id);
            setReadingId(Number(id));
          }}
        />
      );
      break;
    case "READ":
      const post = postlist.find((post) => Number(post.id) === readingId);
      content = (
        <Read
          post={post}
          changeMode={(_mode) => {
            setMode(_mode);
            console.log(_mode);
          }}
        />
      );
      console.log("변경된 상태변수 id : " + readingId);
      console.log(post);
      break;
    case "UPDATE":
      console.log(mode);
      break;
    case "DELETE":
      console.log(mode);
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
