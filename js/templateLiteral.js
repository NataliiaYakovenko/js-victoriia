
const summand1 = 4;
const summand2 = 5;
//Варіант1
console.log(
    String(summand1)+ ' + ' + String(summand2)+ ' = ' + String(summand1+summand2)
);

//шаблонний літерал
console.log(`Summand1: ${summand1}`);

//Варіант2
console.log(`${summand1} + ${summand2} = ${summand1+summand2}`);

//Задача
const greeting = 'Hello'
const userName = prompt('Enter your name')

console.log(`${greeting}, ${userName}`)

//Задача
//Користувач має три спроби ввести пароль
// Якщо пароль вірний, то ввести "Пароль вірний"
// Інакше "Пароль невірний"

const tryLimit = 3;
const passwortPattern = 'qwerty';

let currentTry = 1;
let passwort = '';
// Варіант1
/*do{
  passwort = prompt('Input passwort')
  if(passwort===passwortPattern){
    console.log('The password is correct');
    break;
} else{
    console.log('The password is not correct')
}
  currentTry++;
} while(currentTry<=tryLimit);
*/

//Варіант2

let isPasswortCorect = false;

do{
    isPasswortCorect = prompt('Input passwort')===passwortPattern;
  } while(++currentTry<=tryLimit && !isPasswortCorect);

  if(isPasswortCorect){
    console.log('The password is correct');
  }else{
    console.log('The password is not correct');
  }

 //Тернарний оператор
 //Якщо людина повнолітня, вивести "Ви повнолітня", інакше "Ви неповнолітня" 

 const age = 19;

 const resultString = age >= 18 ? "Ви повнолітня": "Ви неповнолітня";
 console.log(resultString);
