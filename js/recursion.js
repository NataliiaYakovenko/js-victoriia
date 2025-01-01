//Практика валідація даних
/*
Написати функцію для валідації імені користувача (4-32, string)
якщо значення валідне, то повернути його
якщо ні, то згенерувати помилку
*/

//validiteName(userName)=> validiteName || throw error
// isValide => true || false

function validiteName(userName) {
  if (typeof userName !== "string") {
    throw new TypeError("userName must be string value");
  }
  if (userName.length < 4 || userName.length > 32) {
    throw new RangeError("userName must be min 4 and max 32 letters");
  }
  return userName;
}
try {
  console.log(validiteName("Nat"));
} catch (error) {
  console.log(error);
}
try {
  console.log(validiteName('Nat'));
} catch (error) {
  //Як дізнатися причину помилки  instanceof
  if(error instanceof RangeError){
      console.log('RangeError handling');
  }else if(error instanceof TypeError){
      console.log('TypeError handling');
  }else{
    console.log('Error handling');
  }

}
console.log(validiteName('Nataliia'));
//--------------------------------------------------------------------------
/*Реалізувати функцію, яка приймає вік,
повертає вік, якщо параметр відповідає вимогам,
інакше гeнeрує помилку
 */
function validateAge(ageUser) {
  if (typeof ageUser !== "number") {
    throw new TypeError("It must be number");
  }
  if (ageUser < 18) {
    throw new RangeError("You must have age more 18");
  }

  return ageUser;
}
try {
    console.log(validateAge('test'));
} catch (error) {
    console.log(error);
}
//-----------------------------------------------------------------