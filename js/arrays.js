//Array - МАСИВИ - впорядкована колекція
//Як записується

const array1 = new Array();
const array2 = Array()
const array3 =[];  //бідьш поширена форма

//В масиви додаю об'кти
const users =[
    {id: 1, name:'Test'},
    {id: 2, name:'Ivo'}
];
console.log(users.length);

//Щоб звернутися до будь-якого елемента масива вказуємо назву масива і id елемента
console.log(users[0]); 

//array[i] - доступ до елемента під номером[i]
//array.Length - довжина масива
//------------------------------------------------------------
//Задати масив, в якому перераховано 3 перших місяці року
//Перебор об'єктів - за допомогою цикла
const months =['January','February','March']

for(let i = 0;i < months.length;i++){
    console.log(months[i]); // вивести кожен елемент в консоль
}






//задача 13
/*
Написати функцію, яка приймає рядок і масив голосних літер, повертає кількість включень голосних у заданому рядку
function countVovels(str, vovelsArray)
vovelsArray = [a, e, i, o, u, y]
'hello to you' //6
'lorem ipsum dolor sit amet' // 9
*/
//variant1
/*function countVovels(str, vovelsArray) {
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    if(vovelsArray.includes(str[i])){
      result +=1;
    }
  }
  return result;
}
vovelsArray = ['a', 'e', 'i', 'o', 'u', 'y'];
const vovelsCount =(countVovels('hello to you', vovelsArray)); 
const vovelsCount1 =(countVovels('lorem ipsum dolor sit amet', vovelsArray)); 
console.log(vovelsCount);
console.log(vovelsCount1);

//variant2
function countVovels(str, vovelsArray) {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
      for(let g =0; g < vovelsArray.length;g++){
        if(str[i] === vovelsArray[g]){
         result +=1;
        }
      }
    }
    return result;
  }
 vovelsArray = ['a', 'e', 'i', 'o', 'u', 'y'];
const vovelsCount =(countVovels('hello to you', vovelsArray)); 
const vovelsCount1 =(countVovels('lorem ipsum dolor sit amet', vovelsArray)); 
console.log(vovelsCount);
console.log(vovelsCount1);*/