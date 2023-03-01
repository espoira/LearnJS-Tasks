function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };
  
  this.calculate = function(str) {

    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2]

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  }

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}

let simpleCalc = new Calculator;
alert( simpleCalc.calculate("3 + 7") ); // 10
alert( simpleCalc.calculate("7 - 4") ); // 3
  
let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

alert( powerCalc.calculate("2 * 3") ); // 6
alert( powerCalc.calculate("10 / 5") ); // 2
alert( powerCalc.calculate("2 ** 3") ); // 8

  