let i = 3;

while (i) {
  alert( i-- );
}

/* Последнее выводимое значение в этом цикле: 1.
(т.к. число i сначала выводится, а затем уменьшается на единицу,
	и при i = 0 выполнение цикла прекращается). */