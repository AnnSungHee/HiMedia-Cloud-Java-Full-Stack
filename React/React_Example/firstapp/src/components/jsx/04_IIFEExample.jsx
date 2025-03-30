/* 
return 문 안에 즉시실행함수(IIFE, Immediately Lnvoked Function Expression)
를 작성하여 조건부 렌더링 구현
 */
function IIFEExample() {
  const loginYn = "Y";
  return (
    <>
      {(() => {
        if (loginYn === "Y") {
          return <div>홍창기 입니다.</div>;
        } else {
          return <div>비회원 입니다.</div>;
        }
      })()}
    </>
  );
}
export default IIFEExample;