const multiply = (a, b) => a * b;
const add = (a, b) => a + b;

const multiplyX = x => a => multiply(a, 2);
const addX = x => a => add(x, a);
const addFour = addX(4);
const multiplyTwo = multiplyX(2);
const multiplyThree = multiplyX(3);

const formulaWithoutCompose = addX(4)(multiplyX(3)(multiplyX(2)));

const formula = x => addFour(multiplyThree(multiplyTwo(x)));
const formulaByReduce = [multiplyTwo, multiplyThree, addFour].reduce(
  function (prevFunc, nextFunc) {
    return function(value) {
      return nextFunc(prevFunc(value));
    }
  },
  function(k) { return k; }
);
const formulaByReduceResult = function(value) {
  return addFour(
    function(value) {
      return multiplyThree(
        function(value) {
          return multiplyTwo(
          (k => k)(value)
          );
        }(value)
      );
    }(value)
  );
};


function _compose(funcs) {
  return funcs.reduce(
    function (prevFunc, nextFunc) {
      return function() {
        const args = Array.prototype.slice.call(arguments);
        return nextFunc(prevFunc.call(this, args));
      }
    },
    function(k) {
      return k;
    },
  );
}

function _composeWithArgs() {
  const funcs = Array.prototype.slice.call(arguments);
  return funcs.reduce(
    function (prevFunc, nextFunc) {
      return function() {
        const args = Array.prototype.slice.call(arguments);
        return nextFunc(prevFunc.call(this, args));
      }
    },
    function(k) {
      return k;
    },
  );
}

// 화살표 함수 표현식
export function compose(...funcs) {
  return funcs.reduce(
    (prevFunc, nextFunc) => (...args) => nextFunc(prevFunc(...args)),
    k => k
  );
}

// x
// => x * 2
// => (x * 2) * 3
// => ((x * 2) * 3) + 4
const formula = compose(
  multiplyX(2),
  multiplyX(3),
  addX(4),
);
