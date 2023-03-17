let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi();  // ошибка, 

/*
так как функция sayHi() видима только 
внутри блока if, в котором объявлена.
*/