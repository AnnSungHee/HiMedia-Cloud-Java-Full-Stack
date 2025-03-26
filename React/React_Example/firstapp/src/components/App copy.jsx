import Header from "./Header";
import Nav from "./Nav";
import Article from "./Article";
import Create from "./Create";
import { useState } from "react";
import Update from "./Update";

// JSX와 HTML의 차이는
// return에 들어가는 HTML은 HTML이 아니라 JSX임
// return에
// return 값 전체를 주석처리하면 자바스크립트 주석으로 되는데
// return 값 내부에서 주석처리하면 {/**/} 이렇게 되네?

function App() {
  const [mode, setMode] = useState("WELCOME");
  const [id, setId] = useState(0);
  const [topics, setTopics] = useState([
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "javascript", body: "javascript is ..." },
  ]);
  const [nextId, setNextId] = useState(topics.length + 1);

  let content = null;

  let contextControl = null;

  if (mode === "WELCOME") {
    content = <Article title="Welcome" body="Hello, Web" />;
  } else if (mode === "READ") {
    let title, body;
    for (let topic of topics) {
      if (topic.id === parseInt(id)) {
        title = topic.title;
        body = topic.body;
        break;
      }
    }
    content = <Article title={title} body={body} />;
    contextControl = (
      <>
        <li>
          <a
            href={"/update/" + id}
            onClick={(e) => {
              e.preventDefault();
              setMode("UPDATE");
            }}
            >
            Update
          </a>
        </li>
        <li>
          <button onClick={(e)=>{
            const filterTopics = topics.filter((t) => t.id !== Number(id));
            setTopics(filterTopics);
            setMode("READ");
          }}>Delete</button>
        </li>
      </>
    );
  } else if (mode === "CREATE") {
    content = (
      <Create
        onCreate={(_title, _body) => {
          let newTopic = { id: nextId, title: _title, body: _body };
          // ...: rest연산자 배열안의 값들을 다 집어넣음
          let newTopics = [...topics, newTopic];
          setTopics(newTopics);
          setId(newTopic.id);
          setNextId(nextId+1)
          setMode("READ");
        }}
      />
    );
  } else if (mode === "UPDATE") {
    let topic = topics.find((t) => t.id === Number(id));
    content = (
      <Update
        title={topic.title}
        body={topic.body}
        onUpdate={(title, body) => {
          const updateTopic = { id: Number(id), title, body };
          const updateTopics = [...topics];
          for (let i = 0; i < updateTopics.length; i++) {
            if (updateTopics[i].id === Number(id)) {
              updateTopics[i] = updateTopic;
              break;
            }
          }
          setTopics(updateTopics);
          setMode("READ");
        }}
      ></Update>
    );
  }

  return (
    <>
      <Header
        title="REACT"
        onChangeMode={() => {
          setMode("WELCOME");
        }}
      />
      <Nav
        topics={topics}
        onChangeMode={(_id) => {
          // alert(id);
          setId(_id);
          setMode("READ");
        }}
      />
      {content}
      <li>
        <a
          href="/create"
          onClick={(e) => {
            e.preventDefault();
            setMode("CREATE");
          }}
        >
          Create
        </a>
      </li>
      {contextControl} {/* 기본값을 null */}
    </>
  );
}

// function App() {
//   let desc = "";
//   const loginYn = "Y";
//   if (loginYn === "Y") {
//     desc = <div>홍창기 입니다.</div>;
//   } else {
//     desc = <div>비회원 입니다.</div>;
//   }
//   return <>{desc}</>;
// }

// function App() {
//   const loginYn = 'Y';
//   return (
//   <>
//   <div>
//   {loginYn === 'Y' ? (<div>홍창기 입니다.</div>) : (<div>비회원 입니다.</div>)}
//   </div>
//   </>
//   ); }

// function App() {
//   const loginYn = 'Y';
//   return (
//   <>
//   <div>
//   {loginYn === 'Y' && <div>홍창기 입니다.</div>}
//   </div>
//   </>
//   ); }

// /* 즉시 함수를 정의하고 해당 함수를 실행*/
// function App() {
//   const loginYn = "Y";
//   return (
//     <>
//       {
//       (() => {
//         if (loginYn === "Y") {
//           return <div>홍창기 입니다.</div>;
//         } else {
//           return <div>비회원 입니다.</div>;
//         }
//       })
//       ()
//       }
//     </>
//   );
// }

// /* 함수를 선언하고 return에서 사용 */
// function App() {
//   const loginYn = "Y";
//   function test() {
//     if (loginYn === "Y") {
//       return <div>홍창기 입니다.</div>;
//     } else {
//       return <div>비회원 입니다.</div>;
//     }
//   }
//   return (
//     <>
//       {test()}
//     </>
//   );
// }

export default App;
