//Методи фільтрації масивів

//array.filter - використовується для створення нового масиву, який містить лише ті елементи, які задовільняють певній умові (не мутуючий)
//array.filter(callback)
//callback буде викликатись для кожного елементу масиву, і ця callback функція в середині фільтру вона повинна повертати або true/false для кожного елементу масиву

//Потрібно відфільтрувати тільки непарні числа
const array1 = [1,5,-10,16,0,9]

function IsNumberOdd(item){
    return item % 2 === 1 ? true : false;
 //якщо елемент ділиться на 2 і = 1 то буде true, в іншому випадку буде false 
}
const newArray1 = array1.filter(IsNumberOdd)
console.log(newArray1)

//Потрібно відфільтрувати повнолітніх
const users =[
    {id: 1, name:'Test', age: 15},
    {id: 2, name:'Ivo', age: 21}
  ];
  function isAdultUsers(user){
    return user.age >= 18 ? true : false;
 
}
const newUsers = users.filter(isAdultUsers)
console.log(newUsers)
//-------------------------------------------------------------------------------

//array.findeIndex - використовується для повернення індексу в масиві
//якщо даний індекс є в масиві тоді повертається індекс true,
//якщо потрібний індекс відсутній, тоді повертається -1
//array.findeIndex(callback) - викликає функцію зворотнього виклику


//Потрібно знайти індекс елемента 16
const array2 = [1,5,-10,16,0,9]

function getIndex(item){
return item === 16;
}
const index = array2.findIndex(getIndex)
console.log(index);
