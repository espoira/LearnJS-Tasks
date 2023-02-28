function Calculator() {
	
  this.read = () => {
	this.a = +prompt('Первое число:', '');
	this.b = +prompt('Второе число:', '');
  };
  
  this.sum = () => this.a + this.b;
  this.mul = () => this.a * this.b;  
  
}

let calculator = new Calculator();
calculator.read();

alert( "Сумма чисел = " + calculator.sum() );
alert( "Произведение = " + calculator.mul() );