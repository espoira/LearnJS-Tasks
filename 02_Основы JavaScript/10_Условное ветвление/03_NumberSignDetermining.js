let number = prompt('Введите число', 0);

if (number == 0) {
  alert(0);
} else {
  alert( number/Math.abs(number) );
}