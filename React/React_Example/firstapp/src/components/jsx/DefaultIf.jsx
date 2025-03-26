/*
JS문법의 If 문을 사용하여 조건부 렌더링 구현
*/
function DefaultIf(){
    let desc = '';
    const loginYn = 'Y';
    if(loginYn === 'Y') {
        desc = <div>홍창기 입니다.</div>;
    } else {
        desc = <div>비회원 입니다.</div>
    }

    return (
        <>
            {desc}
        </>
    )
}