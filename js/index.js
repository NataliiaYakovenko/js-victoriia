//Операції:
//операції для рядків
//Конкатинація: рядок + рядок = склеювання
const greeting = 'You are ';
const age = prompt('How old are you?');
console.log(greeting+age+' yars old');

//Скороченні операції
let sum1 = 5;
// sum1 = sum1 + 5; довга версія 
sum1 +=5;      //скорочена версія
console.log(sum1);

let sum2 = 5;
// sum2 = sum2 - 5; довга версія 
sum2 -=5;      //скорочена версія
console.log(sum2);

let sum3 = 5;
// sum3 = sum3 * 5; довга версія 
sum3 *=5;      //скорочена версія
console.log(sum3);

let sum4 = 5;
// sum4 = sum4 / 5; довга версія 
sum4 /=5;      //скорочена версія
console.log(sum4);

//Increament - додавання на 1; скорочена версія
let sum5 = 5;
// sum5 = sum5 + 1; довга версія 
// sum5 +=1; довга версія 
sum5++;      //скорочена версія
console.log(sum5);


//Descreament  віднімання на 1; скорочена версія
let sum6 = 5;
// sum6 = sum6 - 1; довга версія 
// sum6 -=1; довга версія 
sum6--;      //скорочена версія
console.log(sum6);


//приклад постфіксна форма +
let x1 = 10;
const y1 = x1++;
console.log(y1);
console.log(x1)

//приклад постфіксна форма -
let x2 = 10;
const y2 = x2--;
console.log(y2);
console.log(x2)

//приклад префіксна форма +
let x3 = 10;
const y3 = ++x3;
console.log(y3);
console.log(x3)

//приклад префіксна форма -
let x4 = 10;
const y4 = --x4;
console.log(y4);
console.log(x4)
