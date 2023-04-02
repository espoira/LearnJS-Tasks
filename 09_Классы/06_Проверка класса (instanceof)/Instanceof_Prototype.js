function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

alert( a instanceof B ); // true

/* так как при проверке с помощью instanceof учитывается только prototype, 
 а не функция-конструктор. И в данном примере прототипная цепочка имеет вид: 
 a.__proto__ == B.prototype, поэтому instanceof возвращает true. */