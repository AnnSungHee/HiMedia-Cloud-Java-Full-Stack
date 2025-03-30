/**
 * let inner = outerFunc();에서 x라는 변수는 지역변수이기 때문에 함수 호출이 끝난뒤에 접근을 못 해야함 
 * 하지만 outerFunc();의 return 값은 innerFunc라는 함수의 정의를 반환하고
 * innerFunc는 outerFunc의 지역변수의 접근하기때문에 innerFunc를 호출하면 outerFunc의 지역변수에 접근이 가능하다.
 */ 
function outerFunc() {
    let x = 10;
    let innerFunc = function () {
        console.log(x);
    };
    return innerFunc;
}
let inner = outerFunc();
inner();