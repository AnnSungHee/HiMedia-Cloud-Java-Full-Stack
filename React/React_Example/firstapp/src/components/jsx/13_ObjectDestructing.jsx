/**
 * 객체 구조 분해
 */
const obj = {firstName: 'jihwan', lastName: 'Oh'};

// 프로터피 키를 기준으로 디스트럭처링 할당이 이루어진다.
// 순서는 의미가 없다.
const {lastName, firstName} = obj;

console.log(firstName, lastName); // jihwan Oh

// 프로퍼티 키가 prop1인 프로퍼티의 값을 변수 p1에 할당
// 프로퍼티 키가 prop2인 프로퍼티의 값을 변수 p2에 할당
const {prop1: p1, prop2:p2} = {prop1:'a', prop2:'b'};
console.log(p1, p2); // 'a' 'b'
console.log({prop1: p1, prop2: p2}); // {prop1: 'a', prop2: 'b'}

// // 아래는 위의 축약형
// const {prop1, prop2} = { prop1: 'a', prop2: 'b' };
// console.log({prop1, prop2}); // { prop1: 'a', prop2: 'b' }

// // default value
// const {prop1, prop2, prop3 = 'c'} = { prop1: 'a', prop2: 'b' };
// console.log({prop1, prop2, prop3}); // { prop1: 'a', prop2: 'b', prop3: 'c' }