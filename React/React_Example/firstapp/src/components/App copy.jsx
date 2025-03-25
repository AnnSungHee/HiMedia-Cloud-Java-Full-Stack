import Header from "./Header";
import Nav from "./Nav";
import Article from "./Article";

// JSX와 HTML의 차이는
// return에 들어가는 HTML은 HTML이 아니라 JSX임
// return에
// return 값 전체를 주석처리하면 자바스크립트 주석으로 되는데
// return 값 내부에서 주석처리하면 {/**/} 이렇게 되네?
// function Header(props) {
//   return (
//     <header>
//       <h1>
//         <a href="/" onClick={(e) => {
//           e.preventDefault();
//           props.onChangeMode();
//         }}>{props.title}</a>
//       </h1>
//     </header>
//   );
// };

// function Nav(props) {
//   const lis = [];

//   for(let i = 0; i < props.topics.length; i++) {
//     let t = props.topics[i];
//     lis.push(<li key={t.id}><a id={t.id} href={'/read/' + t.id} onClick={(e)=>{
//       e.preventDefault();
//       let arr = e.target.href.slice("/");
//       props.onChangeMode(arr[arr.length -1]);
//     }}>{t.title}</a></li>)
//   }

//   return (
//     <nav>
//       <ol>
//         {lis}
//       </ol>
//     </nav>
//   );
// };

// function Article(props) {
//   return (
//     <article>
//       <h2>{props.title}</h2>
//       {props.body}
//     </article>
//   )
// };

function App() {
  let mode = 'WELCOME';

  const topics = [
    {id: 1 , title: "html", body: "html is ..."},
    {id: 2 , title: "css", body: "css is ..."},
    {id: 3 , title: "javascript", body: "javascript is ..."}
  ];

  let content = null;

  if(mode === "WELCOME") {
    content = <Article title="Welcome" body="Hello, Web"/>;
  } else if (mode === "READ") {
    content = <Article title="Welcome" body="Hello, READ"/>;
  }


  return (
    <>
      <Header title="REACT" onChangeMode={()=>{ 
        mode = "WELCOME";
      }}/>
      <Nav topics={topics} onChangeMode={(id) => {
        alert(id);
        mode = "READ";
      }}/>
      {content}
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
