function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  alert(this.name);
};

let rabbit = new Rabbit("Rabbit");

rabbit.sayHi();  // Rabbit (*)
Rabbit.prototype.sayHi();  // undefined
Object.getPrototypeOf(rabbit).sayHi();  // undefined
rabbit.__proto__.sayHi();  // undefined

/*
Поскольку объектом this является то, что расположено 
непосредственно перед конструкцией вида .sayHi(), 
то здесь только при первом вызове функции sayHi() -  
в строке с отметкой (*) - получаем this == rabbit, 
а во всех остальных случаях this будет равен Rabbit.prototype.
*/
