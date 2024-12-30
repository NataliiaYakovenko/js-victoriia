//Лексичне оточення. Замикання

//Scope- область видимост
/*Змінні, які оголошені поза будь-яким блоком - називаються глобальні,
видновсім блокам ( Scope - Script)

  Змінні, які оголошені у середині блоку, тобто у {блок} - докальні, 
тобто видні тільки в середині {блоку}  ( Scope - Block/Local)
 */
const glbalVar = 'global';
if(true){
    const localVarInIIf = 'local in I if';
    if(true){
        const localVarInIIf2 = 'local in I if';
        
      
            console.log(glbalVar);
            console.log(localVarInIIf);
            console.log(localVarInIIf2);
    }
}

// Lexical Environment - лексичне оточення
/*const a = 'global';
function f1(){
    const a = 'local';
    f2()
}
function f2(){
    console.log(a) 
}
f1()


const a = 'global';
function f1(){
    function f2(){
        console.log(a)
        
    }
    const a = 'local';
    f2()
}

f1()
*/


/*Closure - замикання - це комбинація функції та лексичного оточення,
 в якому ця функція була визначена

 У Closure в Scope - локальні змінні функції, в середині якої функція, 
 що виконується була створена
 */

const a = 'global';
function f1(){
    const a = 'local';

    const f2 = function (){
        console.log(a) 
    }
    console.log(f2);
return f2
}
const f2FromF1 = f1();
f2FromF1()

//Приклад
function counter (){
    let i=0;
    return function(){
        return ++i;
    }
}
const counter1 = counter()
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());

const counter2 = counter()
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());
