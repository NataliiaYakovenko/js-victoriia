// Способи задання функцій

//1. Function Declaration - в перекладі оголошення функції

// function ім'яФункції(параматр1, параметр2){
//     тіло функції
//     return значення
//  }

//2. Function Expression - в перекладі вираз функції
//колив функцію кладемо іншу функцію

// const назваФуекції = function ім'яФункції(параматр1, параметр2){
//     тіло функції
//     return значення
//  }
// console.log (назваФуекції(араматр1, параметр2));

//в зміну кладемо функцію
const calcSum = function sum(a,b){
    return a + b;
}
console.log(calcSum(4,5));

//Переписати функцію для піднесення числа до степеня 
//в формі Function Expression

const raisingNumberToPower = function numbers(x,y){
    return x**y;
}
console.log(raisingNumberToPower(2,2));
//____________________________________________

//Відмінності

//Function Declaration порядок оголошення неважливий
console.log(summa1(3,2));

function summa1(num1,num2){
    return num1**num2;
}

//Function Expression порядок оголошення важливий
// оголошення після створення функції
// томущо js бачить функцію як змінну
const raisingNumberToPower1 = function numbers(x,y){
    return x**y;
}
console.log(raisingNumberToPower1(4,2));
//____________________________________________

//Дефолтні значення або значення за умовченням
//В цій функції можна вказати декілька параметрів
const value = prompt('Input number', 10);
console.log(value);

//Задача.
//Знайти суму двох чисел, якщо друге число не передане, то вважати його 1

function sumTwoNumbers(a,b=1){// значення за умовченням повинні бути ОСТАННІ
return a + b;
}
console.log(sumTwoNumbers(3,3));
console.log(sumTwoNumbers(3));

//Задача.
//Якщо користувач передає тільки один параметр то це має бути to
function summaEromN1ToN2(to,from=1){
    let sum = 0;
  for(let i = to; i <= from; i++){
     sum = sum+i;
  }
  return sum;
}
let sumTo = sumTwoNumbers(10,-10);
console.log(sumTo);
let sumTo1 = sumTwoNumbers(10);
console.log(sumTo1);
//__________________________________________

// jsDoc
/**
 * Функція обчислює суму двох чисел
 * @param {число} a - перше число
 * @param {число} [b=1] - друге число
 * @returns {число} - повертає суму двох чисел
 */
function sumTwoNumbers(a,b=1){
    return a + b;
    }
    console.log(sumTwoNumbers(3,3));
    console.log(sumTwoNumbers(3));

/**
 * Функція обчислює суму двох чисел
 * @param {число} to - перше число
 * @param {число} [from=1]  - друге число
 * @returns {число} - повертає суму двох чисел
 */  
    function summaFromN1ToN2(to,from=1){
        let sum = 0;
      for(let i = to; i <= from; i++){
         sum = sum+i;
      }
      return sum;
    }
    let sumTo2 = summaFromN1ToN2(10,-10);
    console.log(sumTo);
    let sumTo3 = summaFromN1ToN2(10);
    console.log(sumTo1);