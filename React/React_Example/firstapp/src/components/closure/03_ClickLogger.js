// 이벤트 핸들러는 클로저
function ClickLogger() {
    // 지역 변수
    const message = "This is a local variable";

    function handleClick() {
        // 이벤트 핸들러가 지역 변수를 참조
        console.log(message);
    }

    return (
        <div>
            <button onClick={handleClick}>Log Message</button>
        </div>
    );
}