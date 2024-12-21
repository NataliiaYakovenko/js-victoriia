// МЕТОДИ МАСИВІВ

//1 array.push - додавання ОДНОГО елементу в кінець масива
const numbers = [10,20,30];
numbers.push(40);
console.log(numbers);

//Ввести кількість елементів масиву і динамічно заповнити масив
/*const elementCount = Number(prompt('Enter count:'))//Скільки разів потрібно вводити числа
const count =[];

for(let i = 0; i < elementCount;i++){
    const element = Number(prompt('Enter number:'))//вводити числа
    count.push(element)
}
console.log(count)*/
//-------------------------------------------------------------------------

//2 array.pop - видалення останього елементу з масиву
const numbers1 = [10,20,30];
const deletedItem = numbers1.pop()
console.log(deletedItem)// виведе видалений елемент 30
console.log(numbers1);// виведе масив [10,20]
//------------------------------------------------------------------------

//3 array.shift - видалення першого елементу з масиву
const numbers2 = [10,20,30];
numbers2.shift()
console.log(numbers2);
//-------------------------------------------------------------------------

//4 array.unshift - додавання першого елементу до масиву
const numbers3 = [10,20,30];
numbers3.unshift(0)
console.log(numbers3);
//-------------------------------------------------------------------------

//array1.slice - копією весь масив або його частину,створюючи новий масив
const numbers4 = [100,200,300,400];
const numbersCopy = numbers4.slice()// зкопіює весь масив
const numbersCopy1 = numbers4.slice(2)// копіювання елементів з першого індексу
const numbersCopy2 = numbers4.slice(1,3)//копіювання елементів з першого індексу по другий
//-------------------------------------------------------------------------

//array.splice - видаляє, додає елементи масива
const numbers5 = [100,200,300,400];
numbers5.splice(2,1)//з другого індексу видалити 1 елемент (300)
console.log(numbers5);
//---------------------------------------------------------------------------

//Задача видалити перший елемент
//Скопіювати два останні елементи
const numbers6 = [100,200,300,400];
numbers6.splice(0,1)
console.log(numbers6)
//Скопіювати два останні елементи
const numbers6Copy = numbers6.slice(1)
console.log(numbers6Copy);
//або//Скопіювати два останні елементи
const numbers7 = [100,200,300,400,500,600,700];
let numbers7Copy = numbers7.slice(numbers7.length-2)//останні два елементи, незалежно скільки їх додасться в майбутньому
console.log(numbers7Copy);
//----------------------------------------------------------------------------

//array.сoncat - з'єднує один масив з іншим  
// варіант1
const numbers8 = [10,20,30,40];
const numbers9 = [100,200,300,400];
const numbers10 = numbers8.concat(numbers9)
console.log(numbers10)

// варіант2
const numbers11 = [10,20,30,40];
const numbers12 = [100,200,300,400];
const numbers13 = [...numbers11,...numbers12]
console.log(numbers13);