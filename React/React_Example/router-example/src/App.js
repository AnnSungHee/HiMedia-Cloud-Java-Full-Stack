import { Link, Outlet, Route, Routes, useNavigate, useParams } from "react-router-dom";

function App() {
  
  function MainLayOut() {
    return (
      <>
        <h1>Hello React Router</h1>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        {/* 라우터에서 자식으로 부를 컴포넌트가 들어갈 자리 */}
        <Outlet /><br/>
        {/* 버튼을 누르면 "/" 경로로 이동 */}
        <button onClick={(e)=>{
          navigate("/");
        }}>홈으로</button>
      </>
    );
  }
  // navigate 함수 만들어주는 함수를 리턴하는 함수
  const navigate = useNavigate();

  function Welcome() {
    return <h1>Welcooooooome</h1>;
  }

  function Home() {
    return (
      <>
        <h2>Home</h2>
        Home is ...
      </>
    );
  }

  const contents = [
    { id: 1, title: "Html", body: "Html is ..." },
    { id: 2, title: "Css", body: "Css is ..." },
    { id: 3, title: "JavaScript", body: "JavaScript is ..." },
  ];

  function Topics() {
    const list = [];
    for (let t of contents) {
      list.push(
        <li>
          <Link to={"/topics" + t.id}>{t.title}</Link>
        </li>
      );
    }
    return (
      <>
        <h2>Topic</h2>
        <ul>{list}</ul>
        <Outlet />
      </>
    );
  }

  function Topic() {
    /**
     * useParams : 경로명에서 parameter들을 객체로 가져옴
     * topics/:topicid/test/:number
     * topics/1/test/5
     * {topicid:1, number:5}
     */
    const { topicid } = useParams();
    const topic = contents.find((content) => content.id === Number(topicid));

    return (
    <>
      <h3>{topic.body}</h3>
    </>);
  }

  function Contact() {
    return (
      <>
        <h2>Contact</h2>
        Contact is ...
      </>
    );
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayOut />}>
          <Route index element={<Welcome />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/topics" element={<Topics />}>
            <Route path="/topics/:topicid" element={<Topic />}></Route>
          </Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
