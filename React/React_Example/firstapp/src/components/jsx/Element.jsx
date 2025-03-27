/* 
Element 란?
- 독립적이고 재사용 가능한 코드 조각
- 화면의 UI를 기능적으로 여러 조각으로 구분하여 관리
- 태그요소들을 묶어서 처리
- 합수기반과 클래스기반으로 구분
    - 함수기반의 컴포넌트가 대세로 자리 잡음
    - React 문서에서도 함수기반을 더 활용할 것을 권고 ㅜ 
*/
function Element() {
    const element = <p className="title">Hello, World</p>
    return (
        <>
            {element}
        </>
    )
}
export default Element;