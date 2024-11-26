//Скорочена форма if

//Завдання
//Вивести привітання для користувачів сайту
//Але, якщо користувач неповнолітній, то попередти його про обмежений функціонал

/*const age = Number (prompt('Скільки вам років?'));

if (age < 18) {
alert('Вибачте, вам надано обмежений функціонал');
}
else {
alert('Вітаємо на нашому ресурсі');
}*/

//Розширина форма if
//Завдання
// Вести 2 числа і знак операції
// Якщо знак операції + , то порахуйте і виведіть суму чисел
// Якщо знак операції * , то порахуйте і виведіть добуток чисел
// Якщо не +, то вивести їх різницю

/*let num1 = Number (prompt('First number'));
let num2 = Number (prompt('Second number'));
let operation = prompt('Specify the operation sign');

if (operation === '+') {
    alert(num1 + num2);
}
else if (operation === '*') {
    alert(num1 * num2);
}
else {
    alert(num1 - num2);
}*/

// && кожна умова підходить
console.group('Таблиця істиності &&:');

console.log('true && true :>> ', true && true);
console.log('false && false :>> ', false && false);
console.log('true && false :>> ', true && false);
console.log('false && true :>> ', false && true);

console.groupEnd ();


/*const age = Number (prompt('Скільки вам років?'));

if (age >=18 && age <=65) {
alert('Вітаємо, ви нам підходите');
}
else {
    alert('Вибачте, ви нам не підходите')
}*/

// || якась із умов підходить
console.group('Таблиця істиності ||:');

console.log('true || true :>> ', true || true);
console.log('false || false :>> ', false || false);
console.log('true || false :>> ', true || false);
console.log('false || true :>> ', false || true);

console.groupEnd ();


// ! якщо є заперечення
console.group('Таблиця істиності !:');

console.log('!true :>> ', !true);
console.log('!false :>> ', !false);

console.groupEnd ();

// falsy  коли  0, 'пустий рядок', false, null, undefined, NaN
const q = "jhjj";
//if (q!=="" && q!==undefined && q!==null)   // перший варіант
if (q)  //другий варіант
 {
    console.log('Значення коректне');
}

//Завдання
// Одночасність умов
const day = "friday";
const date = 13;
//видати повідомлення про знижку,якщо п'ятниця 13
if (day==="friday" && date===13) {
    console.log('Ви отримали знижку 10%');
}

//Завдання
//Якщо користisAdulувач неповнолітній, то вивести інформацію про омження
const isAdult = false;
if (!isAdult) {
    console.log('Вибачте, у вас обмежений доступ');
}

//Number: isNaN(NaN)
// Не можна перевірити NaN===NaN