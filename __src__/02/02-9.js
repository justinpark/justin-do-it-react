const qs = 'banana=10&apple=20&orange=30';

function parse(qs) {
  var queryString = qs.substr(1); // querystring = 'banana=10&apple=20&orange=30'
  var chunks = queryString.split('&'); // chunks = ['banana=10', 'apple=20', 'orange=30']
  var result = {};
  for(var i = 0; i < chunks.length; i++) {
    var parts = chunks[i].split('=');
    var key = parts[0];
    var value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]);
    result[key] = value;
  }
  return result;
}

const params = parse(qs); // params = { banana: 10, apple: 10, orage: 30};

function parse(qs) {
  const queryString = qs.substr(1); // querystring = 'banana=10&apple=20&orange=30'
  const chunks = queryString.split('&'); // chunks = ['banana=10', 'apple=20', 'orange=30']
  let result = {};
  chunks.forEach((chunk) => {
    const [ key, value ] = chunk.split('='); // key = 'banana', value = '10'
    result[key] = value; // result = { banana: 10 }
  });
  return result;
}

function parse(qs) {
  const queryString = qs.substr(1);
  const chunks = queryString.split('&');
  const result = chunks.map((chunk) => {
    const [ key, value ] = chunk.split('='); // key = 'banana', value = '10'
    return { key: key, value: value }; // { key: 'banana', value: '10' }
  });
  return result;
  // result = [
  //  { key: 'banana', value: '10'},
  //  { key: 'apple', value: '20' },
  //  { key: 'orange', value: '30'}
  // ];
}

function sum(numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) // 55

function parse(qs) {
  const queryString = qs.substr(1);
  const chunks = queryString.split('&');
  return chunks
    .map((chunk) => {
      const [ key, value ] = chunk.split('='); // key = 'banana', value = '10'
      return { key, value }; // { key: 'banana', value: '10' }
    })
    .reduce((result, item) => ({
      ...result,
      [item.key]: item.value,
    }), {});
}

function parse(qs) {
  const queryString = qs.substr(1);
  const chunks = queryString.split('&');

  // return chunks
  //   .map((chunk) => chunk.split('='))
  //   .map(([key, value]) =>({ key, value }))
  //   .reduce((result, [ key, value ]) => ({
  //     ...result,
  //     [key]: value,
  //   }), {});
  return chunks
    .map((chunk) => chunk.split('='))
    .reduce((result, [ key, value ]) => ({
      ...result,
      [key]: value,
    }), {});
}
