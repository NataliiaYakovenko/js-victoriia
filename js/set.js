//set - множина - зберігає тільки унікальні значення

//constructor
const s1 = new Set();
console.log(s1);

//------------------------------------------------------------
const s2 = new Set([1, 2, 3, 4, 5, 6]);

//Методи set:

//size - розмір
console.log(s2.size);

//.add - додавання
s2.add(8).add(9).add(7);
console.log(s2);

//has - перевірка, чи містить якесь значення
console.log(s2.has(6));
console.log(s2.has(0));

//delete - видалення
console.log(s2.delete(1));
console.log(s2);

//clear
//console.log(s2.clear());
//console.log(s2);

//forEach - перебрати елементи
s2.forEach((value) => {
  console.log(value);
});
//або
s2.forEach((value, valueAgain) => {
  console.log(value, valueAgain);
});

//for...of - перебрати елементи
for (const item of s2) {
  console.log(item);
}

//------------------------------------------------------------------
//Задача повернути масив з унікальними (неповторювальних) значенями
const array = [1, 2, 3, 4, 5, 6, 1, 3, 5];
const s3 = new Set(array);
const array2 = [...s3];
console.log(array2);

//-------------------------------------------------------------------
//Повернути масив унікальних(неповторювальних) імен
const user1 = ["Bob", "Nataliia", "Jeck", "Bob", "Jeck"];
const user2 = ["Jein", "Carl", "Roland", "Jein", "Carl"];
//варіант1
const userMain = [...new Set([...user1, ...user2])];
console.log(userMain);
//варіант2
const userMain1 = new Set([...user1, ...user2]);
const array3 = [...userMain1];
console.log(array3);
//-------------------------------------------------------------------
//Повернути масив марок телофонів
const phone = [
  { name: "Test0", bhand: "Samsung" },
  { name: "Test1", bhand: "Redmi" },
  { name: "Test2", bhand: "Nokia" },
  { name: "Test3", bhand: "Samsung" },
  { name: "Test4", bhand: "Redmi" },
  { name: "Test5", bhand: "Nokia" },
];
let phone1 = phone.map(phone=>phone.bhand)
const phoneSet = new Set(phone1)
const array4 = [...phoneSet]
console.log(array4);
//-------------------------------------------------------------------

//Повернути name які належать окремим маркам телефонів
//Samsung:["Test0","Test3"]
//Redmi:["Test1","Test4"]
//Nokia:["Test2","Test6"]
const phone2 = [
    { name: "Test0", brand: "Samsung" },
    { name: "Test1", brand: "Redmi" },
    { name: "Test2", brand: "Nokia" },
    { name: "Test3", brand: "Samsung" },
    { name: "Test4", brand: "Redmi" },
    { name: "Test5", brand: "Nokia" },
  ];

  let phone3 = phone2.map(phone2=>phone2.brand)
  const phoneSet1 = new Set(phone3)
  const array5 = [...phoneSet1]
  console.log(array5);

  //const usersPhone ={}
  // array5.forEach(b=>(usersPhone[b]=[]))
  //console.log(usersPhone);
  //отримати всі об'єкти де бренд Nokia
  //const userWithNokia = phone2.filter(u=>u.brand === 'Nokia')
  //console.log(userWithNokia);
  //const usersNameWithNokia = userWithNokia.map(u=>u.name)
  //console.log(usersNameWithNokia);

    //отримати всі об'єкти де бренд Nokia

    const phoneWithUsers ={}
    array5.forEach(
        b=>(phoneWithUsers[b]=phone2.filter(u=>u.brand === b).map(u=>u.name)))
   console.log(phoneWithUsers);