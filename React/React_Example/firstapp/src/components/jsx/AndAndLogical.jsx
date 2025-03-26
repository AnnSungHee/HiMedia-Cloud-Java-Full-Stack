/*
JSX문법의 &&문법을 사용하여 조건부 렌더링 구현
*/
function AndAndLogical(){
    const loginYn = 'Y';
    return (
        <>
            <div>
                {loginYn === 'Y' && <div>홍창기 입니다.</div>}
            </div>
        </>
    );
}