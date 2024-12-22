function name(params) {
  // Function declarstion
}
//---------------------------------------------------
const func = function name() {
  // Function expression
};
//--------------------------------------------------
const fun = () => {}; // Arrow function
// Arrow function - немає arguments
// Arrow function - немає this, бере з середовища, не використовується як метод об'кта

//приклад
const sum = (a, b) => {
  return a + b;
};
console.log(sum(7, 8));

//Скорочена форма
const sum1 = (a, b) => a + b;
console.log(sum1(4, 8));

//-------------------------------------------------
//приклад
//Написати функцію для визначення чи повнолітня людина
//Приймає вік
//Повертає true для повнолітнього, false для неповнолітнього
const isAdult = (age) => {
  return age >= 18;
};
console.log(isAdult(20));
console.log(isAdult(12));

//Скорочений варіант
const isAdult1 = (age) => age >= 18;

console.log(isAdult1(2));
console.log(isAdult1(18));
//-------------------------------------------------------
//приклад. в функцію запакувати об'єкт
const pacToObjact = (firstName, lastName) => {
  return {
    firstNam: "Nataliia",
    lastName: "Yakovenko",
  };
};
console.log(pacToObjact());

//короткий запис
const pacToObjact1 = (firstName, lastName) => ({
 //прибираємо return і об'єкт перемо у (душки)   
    firstNam: "Nataliia",   
    lastName: "Yakovenko",
  });
console.log(pacToObjact1());
console.dir(pacToObjact1());
//-----------------------------------------------------

//приклад
/*написати функцію привітати корисувача
якщо вибрати  en: то повернути Hello + ім'я користувача; 
якщо вибрати  ua: то повернути Вітаю + ім'я користувача; 
якщо вибрати  fran: то повернути Bomgure + ім'я користувача; 
 */
const greetingUserName = (lang,userName)=>{
  if(lang === 'en'){
    return `Hello, ${userName}`
  } else if(lang === 'ua'){
    return `Вітаю, ${userName}`
  } else if(lang === 'fran'){
     return `Bongure, ${userName}`
  }
}
console.log(greetingUserName('en', 'Alex'));
console.log(greetingUserName('ua', 'Nataliia'));
console.log(greetingUserName('fran', 'Franzua'));


//варіант2, зробити через об'єкт
const greeting = {
  en:'Hello',           //властивість об'єкта
  ua:'Вітаю',
  fran:'Bongurno'
}
const greetingUserName1 = (lang,userName)=>`${greeting[lang]} ${userName}`
//greeting[lang] - властивість об'єкта

console.log(greetingUserName('en', 'Bob'));
console.log(greetingUserName('ua', 'Taras'));
console.log(greetingUserName('fran', 'Jozefina'));