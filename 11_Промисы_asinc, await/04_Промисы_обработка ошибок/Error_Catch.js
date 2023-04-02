new Promise(function(resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(alert);

/* В этом примере catch не выполнится, потому что ошибка генерируется не 
  во время выполнения кода, а позже. Поэтому промис не может обработать её.
*/