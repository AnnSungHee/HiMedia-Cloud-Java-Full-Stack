import {
  Link,
  Outlet,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";

const  boardArr = [
  {id: 1, title: "첫 번째 게시글", body: "첫 번째 게시글 내용입니다."},
  {id: 2, title: "두 번째 게시글", body: "두 번째 게시글 내용입니다."},
  {id: 3, title: "세 번째 게시글", body: "세 번째 게시글 내용입니다."}
];

function Task() {
  // 모든 페이지에서 동일하게 보여지는 공통 레이아웃
  function MainLayOut() {

    return (
      <>
        <h1>게시판 앱</h1>
        <Link to="/list">목록</Link>
        <Outlet/>
      </>
    )
  }

  // 게시글 목록 컴포넌트
  function List() {
    const boardList = [];
    
    for(let board of boardArr) {
      boardList.push(
        <li key={board.id} >
          <Link to={"/board/"+board.id}>{board.title}</Link>
        </li>
      );
    }

    return(
      <>
        <h2>게시글 목록</h2>
        <ol>
          {boardList}
        </ol>
      </>
    );
  }

  // 가장 첫 화면이 될 컴포넌트
  function Detail() {
    const navigate = useNavigate();
    const {boardid} = useParams();
    const board = boardArr.find(b => b.id === Number(boardid));
    return (
      <>
        <h2>게시글 상세</h2>
        <br/>
        <p>
          <strong>글 ID:</strong>{boardid}
        </p>
        <br/>
        {board.body}
        <br/>
        <button onClick={() => {
          if(boardArr.find(b => b.id === Number(boardid)+1)) {
            navigate("/board/" + (Number(boardid)+1));
          } else {
            alert("게시글이 존재하지 않습니다.");
          } 
        }}
        >다음 게시글 ▶</button>
      </>
    )
  }
  //
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayOut/>}>
          <Route path="/list" index element={<List/>}/>
          <Route path="/board/:boardid" element={<Detail/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default Task;

/**
 * Routes : 여러 개의 Route를 감싸서 각 URL(path)경로에 맞는 컴포넌트를 렌더링
 * Route는 하위 Route중 일치하는 path를 가진 
 */