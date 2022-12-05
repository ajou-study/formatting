// 1. 개념을 빈 행으로 분리하라.

function someMethod() {
  console.log("hi");
}
//여기에 빈 행 추가!
function secondMethod() {
  console.log("hello");
}

// => 빈 행이 있어야 가독성도 높아지고 눈이 아프지 않다.

// 2. 종속 함수
// 한 함수가 다른 함수를 호출한다면 두 함수는 세로로 가까이 배치하는 게 좋다. 또한 가능하다면 호출하는 함수를 호출되는 함수보다 먼저 배치하는 게 best! => 그래야 프로그램이 자연스럽게 읽히게 된다. => 호출되는 함수를 찾기가 쉬워지며 그만큼 모듈 전체의 가독성도 높아짐

function makeName() {
  let name = self.getName();
}

function getName() {
  //어쩌구저쩌구
}

// 위와 같이 getName을 호출하는 함수가 있으면, 그 함수 선언 다음에 getName()을 배치하는 게 좋다는 뜻
// 간단하지만 매우 유용...

// 3. 들여쓰기 무시하지 말기
