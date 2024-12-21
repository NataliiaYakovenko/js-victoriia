// array - задачі затосувати for...in, for...of

// Задати масив з довільних чисел і вивести 
const numbers = [1,2,3,4,5,6,7,8,9]
for(let i = 0; i < numbers.length; i++){
  console.log(numbers[i]);
}
//--------------------------------------------------------------------
// Задати масив з довільних чисел і вивести тільки додатні
const numbers1 = [1,-2,3,-40,5,6,-75,8,9]
let result = 0;
for(let i = 0; i < numbers1.length; i++){
  if(numbers1[i] > 0){
    //result +=1;   //виведе кількість додатніх чисел - 6
    console.log(numbers1[i]) // виведе кожен елемент окремо - 1,3,5,6,8,9,
  }
}
//---------------------------------------------------------------------
//Задача. Написати функцію для підрахунку суми елементів масиву
const numbers2 = [2,2,2,2,2,2,2,2,2]
function summaValues(numbers2){
  let result = 0;
  for(let i = 0; i < numbers2.length; i++){
    result += numbers2[i];// додаємо значення елемента масиву до результату
  }
  return result;// повертаємо суму
}
console.log(summaValues(numbers2)); // Виведе суму елементів масиву
//----------------------------------------------------------------------
//Перебір елементів спеціалізовними циклами for...in - перебирає ключі
for(const index in numbers2){
  console.log(index,numbers2[index]);
}
//---------------------------------------------------------------------
//for...of - перебирає самі елементи
const months =['January','February','March']
for(const item of months){
  console.log(item);
}

const numbers3 = [1,-2,3,-40,5,6,-75,8,9]
for(const item of numbers3){
  console.log(item);
}

// вивести тільки імена
const users =[
  {id: 1, name:'Test'},
  {id: 2, name:'Ivo'}
];
for(const item of users){
  console.log(item.name)
}