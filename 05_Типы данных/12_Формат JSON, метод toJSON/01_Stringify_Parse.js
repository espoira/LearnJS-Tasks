let user = {
  name: "Василий Иванович",
  age: 35
};

let userTransform = JSON.stringify(user);
alert(userTransform);

let userNew = JSON.parse(userTransform);
alert(userNew);
