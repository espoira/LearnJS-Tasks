function sayHi() {
  alert( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "Вася"
});

alert(bound.test); // undefined, 

/* так как результатом вызова sayHi.bind() будет 
  являться уже другой объект, без свойства test. */