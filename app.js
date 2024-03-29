let stateData = {
  isActive: false
};

// id를 지정한 요소들에 접근하기 위해 변수 선언
const button = document.getElementById("toggle-button");
const displayText = document.getElementById("display-text");

// 클릭 이벤트 생성
button.addEventListener("click", function () {
  // 현재 stateData.isActive의 상태를 확인하고 토글
  if ( stateData.isActive ){
    // 현재가 true이면, false로 변경하여 토글
    stateData.isActive = false;
  } else {
    // 현재가 false이면, true로 변경하여 토글
    stateData.isActive = true;
  }
  updateUI(); // updateUI() 함수 호출
})

// updateUI() 함수 생성
function updateUI() {
  // 상태에 따라 표시할 메시지와 글자 색상을 설정
  const message = stateData.isActive ? "활성화 상태입니다." : "비활성화 상태입니다.";
  const color = stateData.isActive ? "green" : "red";

  // displayText 엘리먼트의 텍스트 콘텐츠와 스타일을 업데이트
  displayText.textContent = message;
  displayText.style.color = color;
}

updateUI(); // 초기 UI 설정