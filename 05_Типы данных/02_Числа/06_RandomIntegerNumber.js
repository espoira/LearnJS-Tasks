function randomInteger(min, max) {
  let randomValue = min + Math.random() * (max + 1 - min);
  return Math.floor(randomValue);
}

alert( randomInteger(1, 5) );
alert( randomInteger(1, 5) );
alert( randomInteger(1, 5) );
