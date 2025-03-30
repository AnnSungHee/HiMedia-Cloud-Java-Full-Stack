/**
 * export : 함수를 외부로 제공
 * import : 함수를 외부에서 가져옴
 * 
 * 
 */
function App() {
    const name = "오지환";
    return (
        <div>
            <Header></Header>
            <Nav></Nav>
            <Article></Article>
        </div>
    );
}
export default App;

/**
 * export default function App() {
 *  const name = "오지환";
 *  return (
 *    <div>
 *      <Header></Header>
 *      <Nav></Nav>
 *      <Article></Article>
 *    </div>
 *  );
 * }
 */