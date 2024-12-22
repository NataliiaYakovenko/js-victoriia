// rest - параметри(залишкові параметри)
//rest - параметри- потрібно оголошувати
function f(a,b,...rest) {
    console.log(rest)//потрапить все крім a,b,  - потрапить [3, 4, 5]
}
const result = f(1,2,3,4,5)
//------------------------------------------------------------------------------------------------
//                           Порівняння arguments i rest-parameters
//
//                   | властивості функції | треба оголошувати|   тип    |   всі параметри?
//   arguments       |             +       |          -       | Arguments|        +
//   rest-parameters |             -       |          +       |   Array  |        -
//                   |                     |                  |          |
//-------------------------------------------------------------------------------------------------

//Порахувати суму елементів
//array.reduce - використовується для обчислення якогось ОДНОГО значення на основі всіх елементів масиву (не мутуючий)
//array.reduce - зводить всі елементи масиву до якогось одного результуючого значення
//array.reduce(calback, initialValue) - синтакс
function summa(...summands) {
//в rest - параметрі створюємо calback
    function howToReduce(acumulative,item){// acumulative - накопичення результату,item - поточний елемент(перший)
      return  acumulative = acumulative + item;//накопичення результату + поточний елемент
    }
 const sum = summands.reduce(howToReduce)//використовується для обчислення якогось ОДНОГО значення на основі всіх елементів
 return sum;
}
const result1 = summa(1,2,3,4,5,6)
console.log(result1);
//-------------------------------------------------------------------------------------------------
// Задача rest - parameters
function colculation(operation,...operands) {
    let result;
    if (operation === "+") {
      result = 0;
      for (let i = 0; i < operands.length; i++) {
        result += operands[i];
      }
    }else if(operation === "*"){
      result = 1;
      for (let i = 0; i < operands.length; i++) {
          result *= operands[i];
        }
    }else{
      return undefined;
    }
    return result;
  }
  //arguments                         0, 1, 2, 3, 4, 5, 6
  const summaOperands = colculation("*", 2, 2, 2, 2, 2, 2);
  //rest - parameters                    0, 1, 2, 3, 4, 5
  console.log(summaOperands);