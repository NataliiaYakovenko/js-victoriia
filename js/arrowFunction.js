//arguments - колекція для збереження аргументів функції
function f(a, b) {
  console.log(arguments[0]); //вивести індекс аргумента
  console.log(arguments[1]);
  console.log(arguments[2]);
  console.log(arguments);
}
f(1, 2, 3);
//Необмежена кількість аргументів
// 1 arguments - псевдомасив (пронумеровани + length)
//arguments - приймає усі перераховані при виклику функції аргументи,
//навіть якщо при оголошені функції вкзано імена для перших кількох  параметрів
// a - arguments[0]
// b - arguments[1]
//----------------------------------------------------------------------

//Написати функцію для підрахунку суми необмеженої кількості елементів
function summa() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}
const summaArguments = summa(1, 2, 3, 4, 5, 6);
console.log(summaArguments);
//-----------------------------------------------------------------------
//Написати функцію для підрахунку добутку необмеженої кількості елементів
function multiplication() {
  let result = 1; // Початкове значення result має бути 1, а не 0, оскільки множення на нуль завжди дасть нуль.
  for (let i = 0; i < arguments.length; i++) {
    result *= arguments[i];
  }
  return result;
}
const multiplicationArguments = multiplication(1, 2, 3, 4, 5, 6);
console.log(multiplicationArguments);
//----------------------------------------------------------------------
/*написати функцію colculation(operation,operand1,operand2...)
де operation - це оерація (+  *), яка має бути виконана над операндами
operation  - arguments[0],тому цикл еребераємо з 1
*/
function colculation(operation) {
    let result;
    if (operation === "+") {
      result = 0;
      for (let i = 1; i < arguments.length; i++) {
        result += arguments[i];
      }
    }else if(operation === "*"){
      result = 1;
      for (let i = 1; i < arguments.length; i++) {
          result *= arguments[i];
        }
    }else{
      return undefined;
    }
    return result;
  }
  const summaOperands = colculation("+", 2, 2, 2, 2, 2, 2);
  console.log(summaOperands);
  const dobOperands = colculation("*", 9, 2, 1);
  console.log(dobOperands)


//де operation - це оерація (+  -)
function colculation(operation) {
  let result;
  if (operation === "+") {
    result = 0;
    for (let i = 1; i < arguments.length; i++) {
      result += arguments[i];
    }
  }else if(operation === "-"){
    result = arguments[1];
    for (let i = 2; i < arguments.length; i++) {
        result -= arguments[i];
      }
  }else{
    return undefined;
  }
  return result;
}
const summaOperands1 = colculation("+", 2, 2, 2, 2, 2, 2);
console.log(summaOperands1);
const subtractionOperands = colculation("-", 9, 2, 1);
console.log(subtractionOperands);
