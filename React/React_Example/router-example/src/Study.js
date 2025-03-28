import {
  Link,
  Outlet,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";

const contents = [
  { id: 1, title: "Html", body: "Html is ..." },
  { id: 2, title: "Css", body: "Css is ..." },
  { id: 3, title: "JavaScript", body: "JavaScript is ..." },
];

const  navList = [
  // {id: 1, title: "WELCOME", link:"/welcome" },
  {id: 2, title: "HOME", link:"/home" },
  {id: 3, title: "TOPICS", link:"/topics" },
  {id: 4, title: "CONTACT", link:"/contact" }
];

function Study() {
  // 모든 페이지에서 동일하게 보여지는 공통 레이아웃
  function MainLayOut() {
    const welcombtn = useNavigate();
    const navs = [];
    for(let nav of navList) {
      navs.push(
        <li key={nav.id} >
          <Link to={nav.link}>{nav.title}</Link>
        </li>
      )
    }
    return (
      <>
        <h1>React-Router-Dom</h1>
        <h2>목차</h2>
        <ol>
          {navs}
        </ol>
        <button onClick={ () => {
          welcombtn("/")
        }
          }>홈으로</button>
        <Outlet/>
      </>
    )
  }

  // 가장 첫 화면이 될 컴포넌트
  function Welcome() {
    return (
      <>
        <h1>여긴 Welcome</h1>
      </>
    )
  }

  // Home 컴포넌트
  function Home() {
    return (
      <>
        <h1>여긴 Home</h1>
      </>
    )
  }

  // Topics 컴포넌트
  function Topics() {
    const contentList = [];
    for(let content of contents) {
      contentList.push(
        <li key={content.id}>
          <Link to= {"/topics/" + content.id}>
            {content.title}
          </Link>
        </li>
      )
    }
    return (
      <>
        <h1>여긴 Topics</h1>
        <ul>
          {contentList}
        </ul>
        <Outlet/>
      </>
    )
  }

  // Topics의 자식 컴포넌트가 될 Topic 컴포넌트
  function Topic() {
    const {topicid} = useParams();
    const content = contents.find(c => c.id === Number(topicid))
    return (
      <>
        <p>{content.body}</p>
      </>
    )
  }

  // Contact 컴포넌트
  function Contact() {
    return (
      <>
        <h1>여긴 Contact</h1>
      </>
    )
  }

  //
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayOut/>}>
          <Route index element={<Welcome/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/topics" element={<Topics/>}>
            <Route path="/topics/:topicid" element={<Topic/>}/>
          </Route>
          <Route path="/contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default Study;

/**
 * Routes : 여러 개의 Route를 감싸서 각 URL(path)경로에 맞는 컴포넌트를 렌더링
 * Route는 하위 Route중 일치하는 path를 가진 
 */