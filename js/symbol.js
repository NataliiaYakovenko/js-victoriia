const symbol = Symbol("key");
console.log(symbol);

const symbol1 = Symbol("key");
console.log(symbol);

console.log(symbol === symbol1);
//--------------------------------------

const key = Symbol("key");
const options = {
  url: "http://some.address.com",
  [key]: "jhjhkahdakfhafasf",
};
console.log(options);
for (const key in options) {
  console.log(key);
}
//--------------------------------------

//symbol - для генерації унікальних даних
const THEMES = {
  LIGHT: Symbol("light"),
  DARK: Symbol("dark"),
};
const themes = THEMES.DARK;

switch (themes) {
  case THEMES.DARK:
    console.log("THEMES.DARK");
    break;
  case THEMES.LIGHT:
    console.log("THEMES.LIGHT");
    break;
  default:
    console.log("unexpacted value");
}
//---------------------------------------------------------

//Symbol.iterator
/*
1. Таку колекцію можна перебирати через for...of

2. Для колекції можна використовувати деструктуризацію
const [first,second] =[1,2]
+ для об'єктів як виняток

3.Spread оператор [...]
створення копії колекції
конкатенація колекції
const array = [1,2,3,4,5]
const arrayCopy=[...array]
+ для об'єктів як виняток
*/
//Приклад
function sum(){
console.log(arguments);
const arrayFromArguments =[...arguments]   //перетворити arguments на array
console.log(arrayFromArguments);
return arrayFromArguments.reduce((colculation,item)=>colculation+item)
}
console.log(sum(1,2,3,4,5));
//передача елементів масиву в функцію
const array1 =[1,2,3,4,5,6,7]
console.log(sum(...array1));

//Злиття об'ктів разом
const user1 ={
    firstName: 'Nataliia',
    lastName:'Yakovenko',
}
const user2 ={
    isMail: true,
    age: 20,
}
//беремо все що було, а далі все, що змінюємо
let mainUser ={...user1,...user2}
console.log(mainUser);
const newName = 'Natasha'
mainUser ={...mainUser,firstName:newName}
console.log(mainUser);
//----------------------------------------------------
//Приклад 2
const contactUsars =[
    {id:1, name:'Olga',age: 31, tel:'+3809998877'},
    {id:2, name:'Boris',age: 35, tel:'+3809998866'},
    {id:3, name:'Vova',age: 34, tel:'+3809998855'},
    {id:4, name:'Tera',age: 25, tel:'+3809998844'},
]
person =  {id:2, name:'Boris',age: 35, tel:'+3803333333'}
const foundIndex =contactUsars.findIndex(u=>u.id===person.id)
console.log(foundIndex);
console.log(contactUsars[foundIndex]=person);
console.log(contactUsars[foundIndex]={...contactUsars[foundIndex],...person});
//---------------------------------------------------------------
//Приклад 3
//Отримання набору опцій з користувацьких і дефолтних
function sendDate(date,option){
 const defaultOptions = {host:'localhost', port: 5400}
 const resultOptions ={...option,...defaultOptions}
 console.log(resultOptions);
}
sendDate({id:2, name:'Boris',age: 35, tel:'+3803333333', port:5005})

//4 Array.from() - створює масив з псевдомасива фбо ітерованої колекції