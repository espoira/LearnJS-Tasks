'use strict';

function anagramsClean(arr) {
  let map = new Map();

  for (let word of arr) {

	let charsArray = word.toLowerCase().split('');
    let sortedWord = charsArray.sort().join('');
	
    map.set(sortedWord, word);
  }

  return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( anagramsClean(arr) );