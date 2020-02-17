// ES5의 예
var x = 0;
var y = 0;

var obj = { x: x, y: y};

var randomKeyString = 'other';
var combined = {};
combined['one' + randomKeyString] = 'some value';

var obj2 = {
  methodA: function() { console.log('A'); },
  methodB: function() { return 0; },
};

// ES6의 예
var x = 0;
var y = 0;
var obj = { x, y };

var randomKeyString = 'other';
var combined = {
  ['one' + randomKeyString]: 'some value',
};

var obj2 = {
  x,
  methodA() { console.log('A'); },
  methodB() { return 0; },
};
