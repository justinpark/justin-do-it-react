// ES6의 예제
const work1 = () =>
  new Promise(resolve => {
    setTimeout(() => resolve('작업1 완료!'), 100);
  });
const work2 = () =>
  new Promise(resolve => {
    setTimeout(() => resolve('작업2 완료!'), 200);
  });
const work3 = () =>
  new Promise(resolve => {
    setTimeout(() => resolve('작업3 완료!'), 300);
  });
function urgentWork() {
  console.log('긴급 작업');
}

const nextWorkOnDone = msg1 => {
  console.log('done after 100ms:' + msg1);
  return work2();
};

work1()
  .then(nextWorkOnDone)
  .then(msg2 => {
    console.log('done after 200ms:' + msg2);
    return work3();
  })
  .then(msg3 => {
    console.log(`done after 600ms:${msg3}`);
  });
urgentWork();
const work1and2 = () =>
  work1().then(msg1 => {
    console.log('done after 100ms:' + msg1);
    return work2();
  });

work1and2()
  .then(msg2 => {
    console.log('done after 200ms:' + msg2);
    return work3();
  })
  .then(msg3 => {
    console.log('done after 600ms:' + msg3);
  });

// 아래 코드는 이해를 돕기 위한 코드입니다. 실제 코드와는 다르니 내장된 Promise를 사용해주세요.
// class Promise {
//   constructor(fn) {
//     function resolve() {
//       if (typeof this.onDone === 'function') {
//         this.onDone.apply(null, arguments);
//       }
//       if (typeof this.onComplete === 'function') {
//         this.onComplete();
//       }
//     }
//     function reject() {
//       if (typeof this.onError === 'function') {
//         this.onError.apply(null, arguments);
//       }
//       if (typeof this.onComplete === 'function') {
//         this.onComplete();
//       }
//     }
//     fn(resolve.bind(this), reject.bind(this));
//   }
//   then(onDone, onError) {
//     this.onDone = onDone;
//     this.onError = onError;
//     return this;
//   }
//   catch(onError) {
//     this.onError = onError;
//     return this;
//   }
//   finally(onComplete) {
//     this.onComplete = onComplete;
//     return this;
//   }
// }
