export function debounce(func, delay) {
  let inDebounce;
  return function(...args) {
    const context = this;
    if (inDebounce) {
      clearTimeout(inDebounce);
    }
    inDebounce = setTimeout(
      () => func.call(context, ...args),
      delay);
  }
}

// const run = debounce(val => console.log(val), 100);

// run('a');
// run('b');
// run('2');
// .... 100ms이후
// 2
