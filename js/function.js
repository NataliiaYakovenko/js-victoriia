// Функція - Повторне використання коду
//Одна функція, одна відповідальність

/*console.log('Hello');
console.log('Hello');
console.log('Hello');
console.log('Hello');*/
//_________________________________
// Оголошення функції
// function ім'яФункції(параматр1, параметр2){
//     тіло функції
//     return значення
//  }
//  виклик функції
//  ім'яФункції(р1, р2)


function myFumction(userName){
    // в душках при оголошенні - параметри функції
    //(нібито ви оголосили функцію let userName)
    console.log(`Hello, ${userName}`);
    console.log(1)
    console.log(2)
    console.log(3)
}

myFumction('Nataliia');// - в душках при виклику аргумент
myFumction('Roland');

const a = myFumction('Ivo');
console.log('a :>>', a);
//____________________________

function myFumction(userName){
    const userGreeting = `Hello, ${userName}`
    return userGreeting;
}
const userName = myFumction('Lidiia');
console.log('UserName :>>', userName);
//__________________________________

//Написати функцію для обчислення двох чисел
//debugger
function sum(paramtr1, paramtr2){
    const summa = paramtr1 + paramtr2;
    return summa;
}

const result = sum(4,5);
console.log(result);
//___________________________________

//Написати функцію, яка приймає два параметри a, b, і повертає a**b
// 2**2 = 4
// 3**3 = 27

function summa1(num1,num2){
    return num1**num2;
}
const result1 = summa1(2,2)
console.log(result1);
//___________________________________

//Написати суму для обчислення цілих чисел від n1 до n2
// 1.5 = 1+2+3+4+5 = 15
//Варіант 1
function summaEromN1ToN2(n1,n2){
    let sum = 0;
  for(let i = n1; i <= n2; i++){
     sum = sum+i;
  }
  return sum;
}
const result2 = summaEromN1ToN2(1,5);
console.log(result2);

//Варіант 2
function summaEromN1ToN2(n1,n2){
    let sum = 0;
  for(let i = n1; i <= n2; i++){
     sum = sum+i;
  }
  return sum;
}
console.log('summaEromN1ToN2(7,10)', summaEromN1ToN2(7,10));
//____________________________________________

// Написати функцію, яка приймає вік користувача
// Повертає true до повнолітнього користувача
// Повертає fals до неповнолітнього користувача

//Варіант1
function isAge(userAge){
   if(userAge >= 18){
      console.log(true)
   }else{
    console.log(false);
   }
}
isAge(21);

//Варіант2
function isAge1(userAge){
    return userAge >= 18? true:false;
}
console.log(isAge1(7));

//Варіант3
function isAdult(age){
    return age >= 18;
}
console.log(isAdult(99));