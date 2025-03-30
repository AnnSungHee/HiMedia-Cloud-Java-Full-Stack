/*
JSX문법의 삼항연산자를 사용하여 조건부 렌더링 구현
*/
function TernaryOperator(){
    const loginYn = 'Y';
    return (
        <>
            <div>
                {
                    loginYn === 'Y' ? 
                        (<div>홍창기 입니다.</div>) : 
                        (<div>비회원 입니다.</div>)
                    }
            </div>;
        </>
    );
}