//Методи перебору масивів
//Callback - це функція, яка передається до іншої функції і виконується в ній
function functionWithCallback(cd,value){
    cd(value)
}
//functionWithCallback(alert,'Hello')
functionWithCallback(console.log,'Hello from console');
//-------------------------------------------------------------------------------

//array.forEach - використовується для перебору (ітерації) кожного елемента масиву і виконання певної дії для виконання кожного елемента
//array.forEach(callback) - викликає функцію зворотнього виклику
//Callback - це функція, яка передається до іншої функції і виконується в ній
//Застосування Callback 
const array1 = [1,2,3,4,5,6,]

function printItem(item, index, array){
console.log(`Item ${index} = ${item}`);
console.log(array);
}
array1.forEach(printItem)

//зробити теж саме через цикл for
for(let i = 0;i < array1.length;i++){
    printItem(array1[i], i, array1)
}
//----------------------------------------------------------------------------

//array.map - працює як forEach (викликає функцію зворотнього виклику), 
//тільки map буде повертати(створювати) новий масив  (немутуючий)

//Згенерувати масив в квадраті
const array2 = [1,2,3,4,5,6,]

function toSquer(item){
return item**2;
}

const newArray2 = array2.map(toSquer)
console.log(newArray2)


//Отимати елементи з вихідного, змінивши знаки елементами
const array3 = [1,2,3,4,5,6,]

function changingSignsElements(item){
return -item;//змінивши знаки -1, -2, -3, -4, -5, -6
}
const newArray3 = array3.map(changingSignsElements)
console.log(newArray3)


//Отримати масив з іменами користувачів
const users =[
    {id: 1, name:'Test'},
    {id: 2, name:'Ivo'}
  ];
  function getName(user){
    return user.name;
  }
const name = users.map(getName)
console.log(name);