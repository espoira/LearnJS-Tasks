function unique(arr) {
	
  let result = [];

  for (let str of arr) {
    if ( !result.includes(str) ) {
      result.push(str);
    }
  }

  return result;
}

let strings = ['1', '3', '3', '2', '1'];

alert( unique(strings) );