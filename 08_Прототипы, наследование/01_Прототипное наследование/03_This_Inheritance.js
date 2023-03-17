let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat();


// Какой объект получит свойство full при данном вызове?

/* 
rabbit, так как метод rabbit.eat() применяется именно к объекту rabbit.
В этом примере сначала происходит поиск данного метода в прототипе, 
а затем добавляется новое свойство full к объекту this = rabbit.
*/

