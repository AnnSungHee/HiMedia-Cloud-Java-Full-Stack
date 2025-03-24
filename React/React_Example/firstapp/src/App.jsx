import "./App.css";

// JSX와 HTML의 차이는
// return에 들어가는 HTML은 HTML이 아니라 JSX임
// return에
// return 값 전체를 주석처리하면 자바스크립트 주석으로 되는데
// return 값 내부에서 주석처리하면 {/**/} 이렇게 되네?

// function App() {
//   return (
//     <div>
//       <header>
//         <h1><a href="/">WEB</a></h1>
//       </header>
//       <nav>
//         <ol>
//           <li><a href="/read/1">html</a></li>
//           <li><a href="/read/1">css</a></li>
//           <li><a href="/read/1">js</a></li>
//         </ol>
//       </nav>
//       <article>
//         <h2>Welcome</h2>
//         Hello, WEB
//       </article>
//     </div>
//   );
// }

function App() {
  let desc = "";
  const loginYn = "Y";
  if (loginYn === "Y") {
    desc = <div>홍창기 입니다.</div>;
  } else {
    desc = <div>비회원 입니다.</div>;
  }
  return <>{desc}</>;
}

export default App;
