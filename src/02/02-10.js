// ES5의 예제
function work1(onDone) {
  setTimeout(() => onDone('작업1 완료!'), 100);
}
function work2(onDone) {
  setTimeout(() => onDone('작업1 완료!'), 200);
}
function work3(onDone) {
  setTimeout(() => onDone('작업3 완료!'), 300);
}
function urgentWork() {
  console.log('긴급 작업');
}
// 실제 비동기 함수를 사용하는 예
work1(function(msg1) {
  console.log('done after 100ms:' + msg1);
  work2(function(msg2) {
    console.log('done after 300ms:' + msg2);
    work3(function(msg3) {
      console.log('done after 600ms:' + msg3);
    });
  });
});
urgentWork();
