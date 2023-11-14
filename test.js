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

// 3. DOM 조작
document.addEventListener("DOMContentLoaded", function() {
  let isHidden = false; // 변수 선언하고 초기화

  const button = document.getElementById("toggle-button");
  const myElement = document.getElementById("myElement");

  button.addEventListener("click", function () {
    // 클릭하면 isHidden 값을 토글하고 myElement의 visibility 속성 업데이트
    isHidden = !isHidden;
    myElement.style.visibility = isHidden ? "hidden" : "visible";
  });
});
