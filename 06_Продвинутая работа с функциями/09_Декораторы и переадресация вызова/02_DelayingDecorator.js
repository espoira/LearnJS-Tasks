function delay(f, ms) {

  return function() {
    setTimeout(() => f.apply(this, arguments), ms);
  };

}

// создание функции-обёртки
let f1000 = delay(alert, 1000);

f1000("test"); // вывод слова "test" через 1000 мс