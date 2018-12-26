// ES5의 예제
function msgAfterTimeout (msg, who, timeout, onDone) {
  setTimeout(function () {
    onDone(msg + ' 안녕 ' + who + '!');
  }, timeout);
}

msgAfterTimeout('', '금', 100, function (msg) {
  msgAfterTimeout(msg, '은', 200, function (msg) {
    msgAfterTimeout(msg, '동', 300, function (msg) {
      console.log('done after 600ms:' + msg);
    });
  });
});

// ES6의 예제
// var fn = function (resolve, reject) {};
// new Promise(fn);
function msgAfterTimeout (msg, who, timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${msg} 안녕 ${who}!`), timeout);
  });
}
msgAfterTimeout('', '금', 100)
  .then((msg) => msgAfterTimeout(msg, '은', 200))
  .then((msg) => msgAfterTimeout(msg, '동', 200))
  .then((msg) => {
    console.log(`done after 600ms:${msg}`);
  });
// 안녕 동! 안녕 은! 안녕 금!

class Promise {
  constructor(fn) {
    function resolve() {
      if (typeof this.onDone === 'function') {
        this.onDone.apply(null, arguments);
      }
      if (typeof this.onComplete === 'function') {
        this.onComplete();
      }
    }
    function reject() {
      if (typeof this.onError === 'function') {
        this.onError.apply(null, arguments);
      }
      if (typeof this.onComplete === 'function') {
        this.onComplete();
      }
    }
    fn(resolve.bind(this), reject.bind(this));
  }
  then(onDone, onError) {
    this.onDone = onDone;
    this.onError = onError;
    return this;
  }
  catch(onError) {
    this.onError = onError;
    return this;
  }
  finally(onComplete) {
    this.onComplete = onComplete;
    return this;
  }
}

// var fn = function (resolve, reject) {};
// p = new Promise(fn);
// p.then(resolver, rejecter).catch(otherRejector).finally(afterResolveorReject);
