import 
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout/>}>
                    <Route index element={<BoardList/>}></Route>
                    <Route path="/post/:postId" element={<PostDetail/>}></Route>
                </Route>
            </Routes>
        </>
    );
}