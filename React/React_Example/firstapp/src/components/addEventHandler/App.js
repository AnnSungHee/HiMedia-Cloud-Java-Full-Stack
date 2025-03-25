function App() {
    const handleClick = () => {
        alert("버튼을 클릭했습니다!");
    };

    return <button onClick={handleClick}>클릭하세요!</button>
};

export default App;