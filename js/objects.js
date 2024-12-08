// ФУНКЦІЇ - КОНСТРУКТОРИ
//Записується з великої літери
//Додається new

function User(firstName, lastName, age, password){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.password = password;
  this.makeOlder = function() {
    this.age++;
  };
};
//Статичні властивості
User.AVG_AGE =85;
console.log(User.AVG_AGE);

//Прототипи об'єктів
//Методи прототипа
const userProto = {};
userProto.changePassword = function(newPassword){
this.password = newPassword;
};
User.prototype = userProto;

const userProto1 = {};
userProto1.makeOlder = function() {
    this.age++;
};
User.prototype = userProto1;

//Додаємо декілько useriv
const user1 = new User('Nataliia', 'Yakovenko', 41, 'qwerty');
console.log(user1);
user1.makeOlder();
console.log(user1);

const user2 = new User('Roland', 'Simonyan', 26, '12345');
console.log(user2);
user2.makeOlder();
console.log(user2);

const user3 = new User('Abu-Dabi', 'Dubai', 20, 'paradise');
console.log(user3);
user3.makeOlder();
console.log(user3);
//------------------------------------------------------------

//Перевірка типу об'єкта
console.log(user1 instanceof User);

//Часто використовуються
if(user1 instanceof User){
    console.log('user1 is User');
} else{
    console.log('user1 is not User');
};
//-------------------------------------------------------------
