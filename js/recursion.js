// Рекурсія
//3**4 = 3*3**3 =3*3*3**2
//Число в степені 0 = 1   (3**0 = 1 )

//4! =1*2*3*4 - факторіал
//0! = 1   
//4! = 4*3!= 4*3*2! = 4*3*2*1! = 4*3*2*1*0!  0! = 1  
let i = 0;
function getFactorial(n){
    if(n===0){
        return 1;
    }
 return n * getFactorial(n-1)//це є 4*3!
}
console.log(getFactorial(4))

//Рекурсія обов'язково потрібна містити перевірку if
//-----------------------------------------------------------------------

// Вивести в консоль для bracketSteq(2)=>(())
//                       bracketSteq(4)=>(((())))

function bracketSteq(n){
    if(n===0){
        return ;
    }
    console.log('(');
    bracketSteq(n-1)
    console.log(')');
}
bracketSteq(4)