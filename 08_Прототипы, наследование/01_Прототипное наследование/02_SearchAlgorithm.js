let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};

let pockets = {
  money: 2000,
  __proto__: bed
};

alert(pockets.pen); // 3
alert(bed.glasses); // 1
alert(table.glasses); // 1
alert(table.money); // undefined


/* В этом примере имеется четыре объекта, и прототипы задаются таким образом, 
чтобы поиск любого свойства осуществлялся по цепочке: pockets → bed → table → head.

При этом с точки зрения производительности кода несущественно, 
как обращаться к свойствам – из самого объекта или же из прототипа.

То есть значение свойства glasses можно с одинаковой скоростью получить любым из способов:
*/

alert(pockets.glasses); // 1
alert(head.glasses); // 1
