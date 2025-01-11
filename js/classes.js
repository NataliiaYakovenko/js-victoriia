/*function User(firstname, lastname,age,isMale,email,isSubscribed){
 this.firstname = firstname;
 this.lastname = lastname;
 this.age = age;
 this.isMale = isMale;
 this.email = email;
 this.isSubscribed = isSubscribed;
}
const userProto = {}
  userProto.getFullName = function(){
     return this.firstname +' '+ this.lastname;
  }
  //в прототипі для екземплярів
User.prototype = userProto;

//статичний метод для функції-конструктор
User.isUser = function(obj){
return obj instanceof User;// instanceof перевіряє чи є така функція конструктор в ланцюжку прототипів
}

const user1 = new User(
    'Natalia',
    'Yakovenko',
    41,
    false,
    'yakovenkonatali999@gmail.com',
    true
)
console.log(user1);
console.log(user1.getFullName())
*/
//=========================================================================================
//класи - класовий підхід
//Класи - синтаксичний цукор над вбудованими в JS
//        функціями-конструкторами і прототипами
class User {
  constructor(firstname, lastname, age, isMale, email, isSubscribed) {
    this._firstname = firstname;
    this._lastname = lastname;
    this.age = age;
    this._isMale = isMale;
    this._email = email;
    this._isSubscribed = isSubscribed;
  }

  //user1.age=20
  set age(value) {
    //перевірки
    if (typeof value !== "number") {
      throw new TypeError("It is must be number");
    }
    if (value < 0 || value > 150) {
      throw new RangeError("Age must be between 0 and 150");
    }
    this._age = value;
  }

  //const age = user1.age
  get age() {
    return this._age;
  }

  getFullName() {
    return `${this._firstname} ${this._lastname}`;
  }
  static isUser(obj) {
    return obj instanceof User;
  }
}
try {
  const user1 = new User(
    "Natalia",
    "Yakovenko",
    //41,
    false,
    "yakovenkonatali999@gmail.com",
    true
  );
  console.log(user1);
  console.log(user1.getFullName());
  console.log(user1.age);
  user1.age = "18";
} catch (error) {
  console.log(error);
}
//-------------------------------------------------------------------------------
/*Задача
Реалізувати клас для телефонів:
марка, модель, колір, ціна, рік випуску
реалізувати метод для розрахунку віку телефона
створити екземпляр класу, викликати для нього метод
*/
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
const phone2 = new Phone("lg", "vortex", "green", 250, 2022);

console.log(phone1);
console.log(phone1.getAgePhone());

console.log(phone2);
console.log(phone2.getAgePhone());
//-------------------------------------------------------------------

//Три кити ООП(об'єктно орієнтоване програмування)

//Інкапсуляція - приховання логіки (особливостей реалізації)
class User5 {
  constructor(fulname) {
    [this._firstname, this._lastname] = fulname.split(" ");
  }
  set fulname(v) {
    [this._firstname, this._lastname] = v.split(" ");
  }
  get fulname() {
    return this._firstname + " " + this._lastname;
  }
}
const user1 = new User5("Nataliia", "Yakovenko");
user1.fulname = "Nataliia Yakovenko";
console.log(user1.fulname);
/////////////////////////////////////////////////////////////////////////

//Спадкування - розширення (extends)
//батьківський клас
class User1 {
  constructor(firstname, lastname, age, isMale, email, isBanned) {
    this._firstname = firstname;
    this._lastname = lastname;
    this._age = age;
    this._isMale = isMale;
    this._email = email;
    this._isBanned = false;
  }

  getFullName() {
    return `${this._firstname} ${this._lastname}`;
  }
}
const person = new User1(
  "Nataliia",
  "Yakovenko",
  41,
  true,
  "yakovenkonatali999@gmail.com"
);

//дочірній клас
class Moderator extends User1 {
  constructor(firstname, lastname, age, isMale, email, premissions) {
    super(firstname, lastname, age, isMale, email); //виклик конструктора батьківського класу
    this._premissions = premissions;
  }
  getFullName() {
    return `Mr. ${this._firstname} ${this._lastname}`;
  }
  sendMessage(person, message) {
    console.log(
      `Moderator ${this._firstname} send message ${message} to user ${person._firstname}`
    );
  }
}
const moderator = new Moderator(
  "Roland",
  "Simonyan",
  27,
  false,
  "roland@Gmail.com",
  {
    banned: false,
    readPrivet: false,
    sendMessage: true,
  }
);
console.log(moderator);
console.log(moderator.getFullName());
moderator.sendMessage(person, "Hello");

/*Реалізувати клас адмін, який є модератором і на додачу
має властивості category (1,2)
реалізує логіку(метод) забанити або зняти бан з конкретного користувача:
bann - true
unbann - false
 */

class Admin extends Moderator {
  constructor(firstname, lastname, age, isMale, email, premissions, category) {
    super(firstname, lastname, age, isMale, email, premissions);
    this._category = category;
  }
  bann(person){
    person._isBanned = true;
   //console.log(`Admin ${this._firstname} banned user ${person._firstname}`);
  }

  unbann(person){
    person._isBanned = false;
   //console.log(`Admin ${this._firstname} did not bann user ${person}`);
  }
}
const admin = new Admin("Jon", "Black", 66, true, "black@gmail.com", {
  banned: true
});

console.log(admin);
console.log(admin.getFullName())
admin.sendMessage(person,'Goodbay')
console.log(person._isBanned)
admin.bann(person)
console.log(person._isBanned)
admin.unbann(person)
console.log(person._isBanned)


//Класи перепризначення методів
/*
squirrel(білка): має ім'я, їсть, що дадуть, бігає
flaingSquirrel(літаюча білка): має розмах крильєв, їсть тільки горіхи,літає
*/
class Squirrel {
  constructor(nickname) {
    this.nickname = nickname;
  }
  set nickname(value) {
    if (typeof value !== "string") {
      throw new TypeError("Nickname must be a string.");
    }
    if (value === " ") {
      throw new RangeError("Nickname cannot be empty.");
    }
    this._nickname = value;
  }
  get nickname() {
    return this._nickname;
  }
  eating(food) {
    console.log(`Squirrel ${this._nickname} eats ${food}.`);
  }
  runing() {
    console.log(`Squirrel ${this._nickname} runs.`);
  }
}
class FlaingSquirrel extends Squirrel {
  constructor(nickname, wingSpan) {
    super(nickname);
    this.wingSpan = wingSpan;
  }
  set wingSpan(value) {
    if (value === " ") {
      throw new RangeError("Wing span cannot be empty.");
    }
    if (typeof value !== "number") {
      throw new TypeError("Wing span must be a number.");
    }
    this._wingSpan = value;
  }

  get wingSpan() {
    return this._wingSpan;
  }

  eating() {
    console.log(`Flaing squirrel ${this._nickname} eats only nuts.`);
  }
  runing() {
    console.log(`Flaing squirrel ${this._nickname} cannot run.`);
  }
  
  flaing(){
    console.log(`Flaing squirrel ${this._nickname} flaes and has length wind span ${this.wingSpan}`);
  }
}

const squirrel = new Squirrel("Bamby");
console.log(squirrel);
squirrel.eating('strawberry');
squirrel.runing();

const flaingSquirrel = new FlaingSquirrel('Leyla',29)
console.log(flaingSquirrel);
flaingSquirrel.eating();
flaingSquirrel.runing();
flaingSquirrel.flaing();




//Поліморфізм -
