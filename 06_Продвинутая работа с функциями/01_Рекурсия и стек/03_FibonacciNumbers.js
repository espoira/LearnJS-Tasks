function fib(n) {
  let f;
  let a = 1;
  let b = 1;
  
  for (let i = 3; i <= n; i++) {
    f = a + b;
    a = b;
    b = f;
  }
  return f;
}

alert( fib(3) ); // 2
alert( fib(7) ); // 13
alert( fib(77) ); // 5527939700884757