'use strict';

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    this.value += +prompt(`Сколько нужно добавить к ${this.value}?`, 0);
  };

}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert('Результат: ' + accumulator.value);