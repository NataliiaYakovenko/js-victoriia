//Приведення типів
//Вести два числа 5 і 100, і вивести їх суму
const number1 = prompt('Введіть перше число:');//наприклад 5
// const number2 = prompt('Введіть друге число:');наприклад 100
const number2 = 100; //або
const sum = number1 + number2;
console.log(sum);
//результат = 5100 (нам не підходить)

//Вирішення задачи тип рядка замінити на число
const number3 = Number(prompt('Введіть перше число:'));//наприклад 5
// const number2 = prompt('Введіть друге число:');наприклад 100
const number4= Number ('100'); //або
const sum1 = number3 + number4;
console.log(sum1);

//Тип числа замінити на рядок
const years1 = String ('10');
const years2 = String ('10');
const years = years1 + years2;
console.log(years);

