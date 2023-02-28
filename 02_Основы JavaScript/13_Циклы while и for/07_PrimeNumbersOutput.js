let n = 10;

outer: for (let i = 2; i <= n; i++) { 

  if ((i % 2 == 0) && (i != 2)) continue;
  
  for (let j = 3; j <= Math.sqrt(i); j += 2) { 
    if (i % j == 0) continue outer; 
  }

  alert(i); 
}