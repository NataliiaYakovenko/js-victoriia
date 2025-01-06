// enumerable - перелічуваний

const user = {
  firstName: "Nataliia",
  lastName: "Yakovenko",
};
for (const key in user) {
  console.log(`${key} = ${user[key]}`);
}

console.log(user);
//------------------------------------------

const array = [1, 2, 3, 4, 5];
for (const index in array) {
  console.log(`array ${index} = ${array[index]}`);
}
console.log(array);

//1.for...in перелічує  перелічувальні властивості, і свої і спадковані

function User(firstname, lastname, age, isMale, email, isSubscribed) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.age = age;
  this.isMale = isMale;
  this.email = email;
  this.isSubscribed = isSubscribed;
}
const userProto = {};
userProto.getFullName = function () {
  return this.firstname + " " + this.lastname;
};

const user1 = new User(
  "Natalia",
  "Yakovenko",
  41,
  false,
  "yakovenkonatali999@gmail.com",
  true
);
//1.
for (const key in user1) {
  console.log(`${key} = ${user1[key]}`);
}
//2.
for (const key in user1) {
  if (user1.hasOwnProperty(key)) {
    console.log(`${key} own = ${user1[key]}`);
  }
}
//2.Object.keys() - масив власних перелічувальних властивостей
console.log(Object.keys(user1));

Object.keys(user1).forEach((user1Kye) => {
  console.log(`user ${user1Kye}  =  ${user1[user1Kye]}`);
});

const user1key = Object.keys(user1);
user1key.forEach((user1key) => {
  console.log(`${user1key} = ${user1[user1key]}`);
});

console.log(Object.values(user1));

console.log(Object.entries(user1));
//-------------------------------------------------------------------------------------------
//Створити об'єкт телефона і вивести масив його властивостей і масив значень цих властивостей
class Phone {
  constructor(brand, model, color, price, year) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.price = price;
    this.year = year;
  }
  getAgePhone() {
    return new Date().getFullYear() - this.year;
  }
}
const phone1 = new Phone("samsung", "galaxy", "red", 200, 2020);

for (const key in phone1) {
  console.log(`${key} = ${phone1[key]}`);
}

for (const key in phone1) {
  if (phone1.hasOwnProperty(key)) {
    console.log(`${key} own = ${phone1[key]}`);
  }
}

console.log(Object.keys(phone1));

Object.keys(phone1).forEach((phone1Kye) => {
    console.log(`phone ${phone1Kye}  =  ${phone1[phone1Kye]}`);
  });

  console.log(Object.values(phone1));

console.log(Object.entries(phone1));