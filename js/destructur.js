//Деструктуруюче присвоєння
/*особливості синтаксису
  1. Імена змінних повинні відповідати іменам властивостей об'єкта
  2. Після двокрапки можна вказувати нове ім'я або
  деструктурузувати вкладений об'єкт

*/

/*варіант1
function f1(user) {
  const {firstName,lastName,age}=user

  console.log(user.firstName)
  console.log(user.lastName);
}
  */

//варіант2
//значення за замовченням при деструктуризації
function f1({ firstName, lastName, age=0 }) {
  console.log(user.firstName);
  console.log(user.lastName);
  console.log(age);

}

const user = {
  firstName: "Nataliia",
  lastName: "Yakovenko",
  //age: 41,
};

f1(user);
//-----------------------------------------------------
/*варіант2
function f(author,titel){
 console.log(book.author);
   console.log(book.titel);
    }*/

/*const book = {
       author: "Astred Lingred",
       titel: "Karlson",
    };
   // f(book);
    //варіант1
    const { author, titel } = book;
    console.log(book.author);
    console.log(book.titel);*/
//------------------------------------------

const book = {
  author: {
    firstName: "Astred",
    lastName: "Lingred",
  },
  price: 12,
};

const{author:{firstName,lastName},
price: bookPrice,
}=book


console.log(bookPrice);
console.log(firstName);
console.log(lastName);
//--------------------------------------------

//масиви
const array =[1,2,3,4]
const [array0,array1,array2,array3]=array
console.log(array);
console.log(array0);
console.log(array1);
console.log(array2);
console.log(array3);
//-------------------------------------------

const user1 ={
  name: 'Nataliia',
  age: 42,
  email: ['yakovenkonatali@gmail.com', 'test@gmail.com'],
  isMale: true,
}
const{name,...restValue}=user1
console.log(name);
console.log(restValue)
/*
Завдання: name,age,email1,email2,isMale
переймінувати name --> userName; age --> userAge;
*/
const {
    name: userName,
    age: userAge,
    email: [email1,email2],
    isMale,

}=user1

console.log(userName,userAge,email1,email2,isMale)
//--------------------------------------------------
const arttr = {id:'btn',style:'color:blue', title:'click me'}
const{style,...restArttr}=arttr
console.log(style);
console.log(restArttr)