
function unique(arr) {
  return Array.from( new Set(arr) );
}

let valuesList = ['1','2','1','0','0'];

alert( unique(valuesList) );
