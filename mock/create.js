const getRandomNumber = (min, max) => {
  const range = max - min + 1;
  return parseInt(Math.random() * range + min, 10);
}

const createData = (index) => {
  switch(getRandomNumber(0, 2)) {
    case 1: {
      return {
        id: `DOIT${index}`,
        code: 'DOIT',
        name: '두잇코인',
        totalPrice: getRandomNumber(10000000, 800000000),
        currentPrice: getRandomNumber(20000, 25000),
        amount: getRandomNumber(1, 30),
        datetime: '2019/01/20 08:23:22',
      };
    }
    case 2: {
      return {
        id: `ETH${index}`,
        code: 'ETH',
        name: '이더리움',
        totalPrice: getRandomNumber(100000000, 500000000),
        currentPrice: getRandomNumber(400000, 600000),
        amount: getRandomNumber(100, 1000),
        datetime: '2019/01/20 08:23:22',
      };
    }
    default: {
      return {
        id: `BTX${index}`,
        code: 'BTX',
        name: '비트코인',
        totalPrice: getRandomNumber(100000000000, 200000000000),
        currentPrice: getRandomNumber(10000000, 40000000),
        amount: getRandomNumber(0, 10),
        datetime: '2019/01/20 08:23:22',
      };
    }
  }
}

module.exports = function() {
  return {
    users: [],
    transactions: Array(100).fill('').map((_, index) => createData(index)),
  };
};
