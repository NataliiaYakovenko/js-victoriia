// if - розголуження
/*const isLogged = false;
if (isLogged) {
  console.log("Hello!");
  console.log("Ви упішно зайшли в систему");
} else {
  console.log("Спробуйте ввести свої дані повторно");
}

const isEnoughMoney = false;
if (isEnoughMoney) {
  console.log("Операція схвалена");
} else {
  console.log("Операція відхилена");
}

//Оператори порівняння
// >,<,>=,<=,==/===
// !=/!== недорівнює

//const age = 18;

console.log('age > 18 :>> ', age > 18);
console.log('age < 18 :>> ', age < 18);
console.log('age >= 18 :>> ', age >= 18);
console.log('age <= 18 :>> ', age <= 18);

// Нестрога рівність\невірність - ПОГАНО
console.log('age == 18 :>> ', age == 18);
console.log('age == "18" :>> ', age == "18");
console.log('age != 18 :>> ', age != 18);
console.log('age != "18" :>> ', age != "18");

//Cтрога рівність\невірність 
console.log('age === 18 :>> ', age === 18);
console.log('age === "18" :>> ', age === "18");
console.log('age !== 18 :>> ', age !== 18);
console.log('age !== "18" :>> ', age !== "18");*/

// ==  перетворює типи
// === не перетворює типи

//Завдання. 
//Якщо користувач повнолітній, то привітайте його, якщо ні - то досуп заборонений.
/*const age = Number(prompt('Скільки вам років?'));

if (age >= 18) {
   console.log('Вітіємо на порталі послуг');
}
else {
    console.log('Вибачте, доступ заборонений');
}*/

//Завдання
// Вести 2 числа і знак операції
// Якщо знак операції + , то порахуйте і виведіть суму чисел
// Якщо не +, то вивести їх різницю

let num1 = Number (prompt('First number'));
let num2 = Number (prompt('Second number'));
let operation = prompt('Specify the operation sign');

/*if (operation === '+') {
    alert(num1 + num2);
}
else {
    alert(num1 - num2);
}*/

//або
if (operation === '+') 
{
    console.log('Suma: ', num1 + num2);
}
else {
    console.log('Suma: ', num1 - num2);
}

