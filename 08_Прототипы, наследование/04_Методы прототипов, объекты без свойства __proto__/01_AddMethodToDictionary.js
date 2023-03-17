let dictionary = Object.create(null, {
  toString: { // определяем свойство toString
    value() { 
      return Object.keys(this).join();
    }
  }
});

// добавляем немного данных
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // здесь __proto__ является обычным ключом

// только apple и __proto__ выведены в цикле
for(let key in dictionary) {
  alert(key); // "apple", затем "__proto__"
}

// метод toString в действии
alert(dictionary); // "apple,__proto__"