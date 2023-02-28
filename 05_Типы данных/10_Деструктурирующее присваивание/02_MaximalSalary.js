let salariesList = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries) {

  let max = 0;
  let topName = null;

  for( const [name, salary] of Object.entries(salaries) ) {
    if (salary > max) {
      max = salary;
      topName = name;
    }
  }
  return topName;
}

alert( topSalary(salariesList) );