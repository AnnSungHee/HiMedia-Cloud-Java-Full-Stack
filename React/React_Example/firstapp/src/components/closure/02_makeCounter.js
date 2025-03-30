/**
 * 고차함수 : 매개변수와 반환값이 모두 함수인 함수
 * makeCounter는 predicate라는 인자로 함수를 받고 해당 함수를 기반으로 하는 함수를 반환한다.
 */
function makeCounter(predicate) {
    let counter = 0;
    
    return function () {
        counter = predicate(counter);
        return counter;
    };
}

// 매개변수로 들어오는 값을 1 증가시키는 함수
function increase(n) {
    return ++n;
}

// 매개변수로 들어오는 값을 1 감소시키는 함수
function decrease(n) {
    return --n;
}

// 숫자를 증가시키는 함수를 전달하여 makeCounter내부의 변수에 접근이 가능하고 유지가 됨
const increaser = makeCounter(increase);
console.log(increaser());   // 1
console.log(increaser());   // 2

// 숫자를 감소시키는 함수를 전달하여 makeCounter내부의 변수에 접근이 가능하고 유지가 됨
const decreaser = makeCounter(decrease);
console.log(decreaser());   // -1
console.log(decreaser());   // -2

// 각 함수들은 따로 존재하여 서로 영향을 끼치지 않음