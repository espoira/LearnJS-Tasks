let objectA = {};
let objectB = objectA;

function A() { 
  return objectA;
}

function B() { 
  return objectB;
}

let a = new A();
let b = new B();

alert( a == b ); // true
