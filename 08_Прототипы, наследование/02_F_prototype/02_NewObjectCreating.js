// Пусть имеется некий объект obj, созданный функцией-конструктором.
// Можно ли создать ещё один объект такого же типа с помощью конструкции:

let obj2 = new obj.constructor();



// Пример функции-конструктора для объекта obj, с которой такой вызов будет работать правильно:

function User(name) {
  this.name = name;
}

let user = new User('John');
let user2 = new user.constructor('Pete');

alert(user2.name); // Pete

// Здесь User.prototype.constructor == User



// Пример функции-конструктора, для которой такой код будет работать некорректно:

function User(name) {
  this.name = name;
}

User.prototype = {}; // присваиваем пустой объект со встроенным прототипом Object.prototype

let user = new User('John');
let user2 = new user.constructor('Pete');

alert(user2.name); // undefined

/* В этом примере по сути получаем let user2 = new Object('Pete') вместо new User('Pete'), 
с учётом того, что для объектов существует встроенный Object.prototype.constructor == Object. 
*/