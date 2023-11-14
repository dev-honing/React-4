let stateData = {
  isActive: false
};

// id를 지정한 요소들에 접근하기 위해 변수 선언
const button = document.getElementById("toggle-button");
const displayText = document.getElementById("display-text");

// 클릭 이벤트 생성
button.addEventListener("click", function () {
  if ( stateData.isActive ){
    stateData.isActive = false;
  } else {
    stateData.isActive = true;
  }
  updateUI();
})