/*try{
 - код, який потенційно може викликати помилки
}
catch(err){
 - блок куди буде передане керування, якщо виникла помилка
 або згенерувалась в ручну в throw
console.log(err);
}*/

const a =10;
console.log(a);
try{
    const c = a+b; // код з потенційною помилкою
}
catch(err){
console.log(err);
}

console.log('hello');
console.log('hello');
console.log('hello');
//------------------------------------------------

/*throw new Error('text')
console.log('hello');*/
//-----------------------------------------------
//Задача
//Написати функцію для обчислення факторіала.
//Передбачити, щоб можна було обчислювати !
//тільки number, прицьому цілі додатні значення

function factorial(n){
    if(typeof n !== "number"){
        throw new Error('n must be number')
    }
  if(n<0 || Number.isSafeInteger(n)){  // Безпечне ціле число
        throw new RangeError('n must be not negative and integer value')
  }
 if(n === 0){
    return 1;
 }
 return n*factorial(n-1)

}
try{
    console.log(factorial(-5));
}catch(error){
    console.log(err);
}

console.log('hello');
