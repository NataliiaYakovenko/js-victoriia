//Об'єкт - це крнтейнер для інформації

const obj1 = { //синтаксичний цукор
};
const obj2 = Object();
const obj3 = new Object(); //функція-конструктор

console.log(obj1);
//alert - не підтримує виведення об'єктів
//________________________________________

//Ініціалізація об'єктів
/*const user = {
//key,value   властивості розділяються комами
firstName: 'Nataliia',
lastName: 'Yakovenko',
age: 41,
};
console.log(user);
//_________________________________________

//Доступ до властивостей - це операція крапка .
console.log(user.firstName);

//Змінити властивості
user.age = 42;
console.log(user.age);

//Додавання властивостей
user.email = 'yakovenkonatali999@gmail.com'
console.log(user.email);

//Видалення властивостей
delete user.age;
console.log(user);
//____________________________________________

//Задача
/*Створити об'єкт авто (марка., модель, рік випуску, реєстраційний номер, колір)
Переглянути об'єкт (вивести в консоль)
Змінити колір
Видалити властивість рік випуску
Додати властивість ім'я, прізвище власника
Преглянути об'єкт (вивести в консоль)
 */
/*const avto = {
     brand: 'Audi',
     model: 'Q10',
     year: 2024,
     number:'AP1410RA',
     color: 'red',
};
console.log(avto);

delete avto.year;
avto.color = 'gold'
avto.nameOvner = 'Nataliia';
avto.surnameOvner = 'Yakovenko';
console.log(avto);*/
//_________________________________________


//Типи значення (примітиви) і посилальні типи (типи посилання)
const number1 = 5;
const number2 = 5;
console.log(number1===number2);
//--------------------------------

const object1 = {};
const object2 = {};
console.log(object1===object2);
//-------------------------------

const user = {
    firstName: 'Nataliia',
    lastName: 'Yakovenko',
    age: 41,
    };
    console.log(user);

 const user1 = user;
 user1.firstName = 'Nata jan';
 console.log(user1);
 console.log(user);
 console.log(user===user1);
 //______________________________

 //Копіювання об'єктів
 //Варіант1
 const user2 = Object.assign({},user);
 console.log(user2);
 console.log(user2===user);
 
 //Варіант2
 const user3 = {...user};
 console.log(user3);
 console.log(user3===user);
 //--------------------------------
 
 //Задача.Зробіть копію авто двома підходами
 const avto = {
    brand: 'Audi',
    model: 'Q10',
    year: 2024,
    number:'AP1410RA',
    color: 'red',
};
console.log(avto);

//Варіант1
const avto1 = Object.assign({},avto);
avto1.color = 'green';
console.log(avto1);
console.log(avto1===avto);

//Варіант2
const avto2 = {...avto};
avto2.year = 2022;
console.log(avto2);
console.log(avto2===avto);