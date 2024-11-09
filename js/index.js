// Типи даних
// string - записуються у лапках ''i"" i ``
const stringVar1 = 'line'; //лапки не можна розривати
console.log(stringVar1);

const stringVar2 = "row"; //лапки не можна розривати
console.log(stringVar2);

const stringVar3 = `string string 
                   string string string`;//лапки можна розривати
console.log(stringVar3);

const stringVar4 = 'store "Nataliia"';
console.log(stringVar4);

const stringVar5 = 'store \'Lidia\'' // екранування
console.log(stringVar5);

const stringVar6 = "\u{1F60D}"; // використання юнікода
console.log(stringVar6);

// number числа
// 1, 50, -4   цілі числа
//0.6, 34.6 - з фіксованою крапкою
//0.0000000000006   - 0.6*10^-12 -  це 0.6 в -12 степені = 0.6e-12 -експоненційна форма
// 550000000        - 55*10^7   -це 55 в 7 степені     = 55e7  (з плавоючею комою)
//Nan (not a namber) - коли ти хочеш написати число, але виходить нечисло
// 5/0   - Infinity (значить було ділення на 0), -0, +0
 const numberA = 10.0005;
console.log(numberA);

// В консолі можна подивитися яку кількість чисел max/min можна зберігати 
// Number.MAX_SAFE_INTEGER - ціле число
// Number.MIN_SAFE_INTEGER - ціле число
// Number.MAX_VALUE
// Number.MIN_VALUE



//bigint - велике ціле число
const bigintValue = 1111111111111111111111111111111111111111111111111111111111111111111111n;
console.log(bigintValue);
console.log(typeof bigintValue);


//boolean - логічний тип даних(true or false)
const isOdd = true;
console.log(isOdd);


// null - порожня, пуста коробка
const nullValue = null;
console.log(nullValue);


//undefined - коробка, в яку нічого не клали і її не можна знайти
let value;
console.log(value);

//symbol - використовується для технічних причин
const symbol = Symbol('foo');
console.log(symbol);

//ітого 7 примітивних типів і object

//object - це контейнер,в який запоковуємо коробки
const objValue = {};
console.log(objValue);

    


