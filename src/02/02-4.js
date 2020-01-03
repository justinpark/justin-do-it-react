const num = 1;
num = 3; // 타입 에러가 발생합니다

const str = '문자';
str = '새 문자'; // 타입 에러가 발생합니다

const arr = [];
arr = [1, 2, 3]; // 타입 에러가 발생합니다

const obj = {};
obj = { name: '내 이름' }; // 타입 에러가 발생합니다

const arr2 = [];
arr2.push(1); // arr2 = [1]
arr2.splice(0, 0, 0); // arr2 = [0,1]
arr2.pop(); // arr2 = [1]

const obj2 = {};
obj2['name'] = '내이름'; // obj2 = { name: '내이름' }
Object.assign(obj2, { name: '새이름' }); //obj2 = { name: '새이름' }
delete obj2.name; //obj2 = {}

const num1 = 1;
const num2 = num1 * 3; // num2 = 3

const str1 = '문자';
const str2 = str1 + '추가'; // str2 = '문자추가'

const arr3 = [];
const arr4 = arr3.concat(1); // arr4 = [1]
const arr5 = [...arr4, 2, 3]; // arr5 = [1, 2, 3]
const arr6 = arr5.slice(0, 1); // arr6 = [1], arr5 = [1, 2, 3]
const [first, ...arr7] = arr5; // arr7 = [2, 3], first = 1

const obj3 = { name: '내이름', age: 20 };
const obj4 = { ...obj3, name: '새이름' }; // obj4 = { name: '새이름', age: 20}
const { name, ...obj5 } = obj4; // obj5 = { age: 20 }

const arr = [1, 2, 3];
// 가변 변수를 사용한 예
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// iterator 방식의 for-in 루프와 함께 불변 변수를 사용한 예
for (const item in arr) {
  console.log(item);
}

// forEach 함수를 활용한 예
arr.forEach((item, index) => {
  console.log(item);
  console.log(index);
});
