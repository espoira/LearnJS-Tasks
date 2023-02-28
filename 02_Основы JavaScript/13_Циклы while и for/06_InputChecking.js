'use strict';

let enteredNumber;

do {
  enteredNumber = prompt("Введите число, большее 100:", 0);
} while (enteredNumber <= 100 && enteredNumber);