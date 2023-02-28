function checkAge(age) {
  if (age > 18) {
    return true;
  } //else {

    return confirm('Родители разрешили?');
  //}
}
/* Эта функция будет одинаково работать, как 
с else (закомментировано), так и без него. */