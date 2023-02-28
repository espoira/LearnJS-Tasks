function pow(x,n)
{
  let result=1;
  for(let i=0;i<n;i++) {result*=x;}
  return result;
}

let x=prompt("x?",''), n=prompt("n?",'')
if (n<=0)
{
  alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
}
else
{
  alert(pow(x,n))
}

// Недостатки в стиле написания этого кода:
/*
1. Нет пробела после запятой при перечислении аргументов функции.
2. Фигурная скобка, открывающая тело функции перенесена на следующую строку.
3. Нет пробелов вокруг знаков сравнения и присваивания, а также после ; в условии цикла for.
4. Не хватает пробелов или переноса на новую строчку внутри фигурных скобок в теле цикла.
5. Точка с запятой ; должна быть желательно в конце каждой команды.
6. В условных конструкциях не стоит переносить на новую строку открывающую фигурную скобку 
   после условия if, а также рекомендуется запись } else { на одной строке.
7. Нужны пробелы вокруг вложенного вызова функции: alert( pow(x, n) );
8. Строки в коде не должны быть слишком длинными, лучше разделять их запись на несколько строк.
9. Отдельные блоки кода желательно разделять пустой строкой, её следует добавить перед условием if.
*/