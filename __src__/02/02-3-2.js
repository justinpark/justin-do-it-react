// ES5 예제
var objectOne = { one: 1, two: 2, other: 0 };
var objectTwo = { three: 3, four: 4, other: -1 };

var combined = {
  one: objectOne.one,
  two: objectOne.two,
  three: objectTwo.three,
  four: objectTwo.four,
};
var combined = Object.assign({}, objectOne, objectTwo);
// combined = { one: 1, two: 2, three: 3, four: 4, other: -1}
var combined = Object.assign({}, objectOne, objectTwo);
// combined = { one: 1, two: 2, three: 3, four: 4, other: 0}
var others = Object.assign({}, combined);
delete others.other;

// ES6 예제
var combined = {
  ...objectOne,
  ...objectTwo,
};
// combined = { one: 1, two: 2, three: 3, four: 4, other: -1} 
var combined = {
  ...objectTwo,
  ...objectOne,
};
// combined = { one: 1, two: 2, three: 3, four: 4, other: 0}
var { other, ...others } = combined;
// others = { one: 1, two: 2, three: 3, four: 4}
