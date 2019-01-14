import throttle from './throttle';

const MICRO = 100000;

class CoinApp {
  constructor(coins) {
    this.coins = Object.entries(coins).reduce((coins, [code, amount]) => ({
      ...coins,
      [code]: { microAmount: amount * MICRO },
    }), {});
    this.sell = throttle(this.sell.bind(this), 1000);
  }

  buy(code, price, amount) {
    const microAmount = amount * MICRO;
    if (!this.coins[code]) return;
    
    const {
      microAmount: currentAmount,
      price: currentPrice,
    } = this.coins[code];

    if (microAmount > currentAmount) return;
    if (currentPrice && price < currentPrice) return;

    this.coins[code] = {
      microAmount: currentAmount - microAmount,
      price,
    };
  }

  sell(code, price, amount) {
    const microAmount = amount * MICRO;

    const {
      microAmount: currentAmount = 0,
      price: currentPrice,
    } = this.coins[code] || {};

    if (currentPrice && price > currentPrice) return;

    this.coins[code] = {
      microAmount: currentAmount + microAmount,
      price,
    };
  }

  print() {
    console.log('=====현재 거래소 보유 현황======');
    console.log('코드|현재 가격|시가 총액');
    Object.entries(this.coins)
      .forEach(([code, { microAmount, price }]) =>
        console.log(`${code}|${price}|${microAmount * price / MICRO}`)
      );
  }
}
