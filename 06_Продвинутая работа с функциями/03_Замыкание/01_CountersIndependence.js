function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter1 = makeCounter();
let counter2 = makeCounter();

alert( counter1() ); // 0
alert( counter1() ); // 1

alert( counter2() ); // 0
alert( counter2() ); // 1


/*
В этом примере счётчики counter1 и counter2 независимы между собой. 

И хотя они оба создаются при помощи одной и той же функции 
makeCounter(), это происходит при её совершенно отдельных вызовах, 
поэтому у каждого из счётчиков будет своя собственная переменная count.
*/