// 삼항 연산자 사용 연습하기
// 1. 변수 할당
const age = 26;
const message = age >= 18 ? "어른" : "청소년"; // 조건에 따라 참이면 앞, 거짓이면 뒤를 반환
console.log(message); // 어른

// 2. 함수 반환
function Greeting(isMorning){
  return isMorning ? "좋은 아침!" : "안녕, 반가워!";
}
console.log(Greeting(true)); // 좋은 아침!
console.log(Greeting(false)); // 안녕, 반가워!