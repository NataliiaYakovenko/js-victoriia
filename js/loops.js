// while, do...while
/*console.log('Пройти прямо');
console.log('Повернути ліворуч');
console.log('Пройти прямо');
console.log('Повернути ліворуч');
console.log('Пройти прямо');
console.log('Повернути ліворуч');
console.log('Пройти прямо');
console.log('Повернути ліворуч');
*/

/*let sideCont = 1;
const totalSideAmount = 4;

while(sideCont <= totalSideAmount){
    console.log('Пройти прямо');
    console.log('Повернути ліворуч');
    sideCont++ ;//sideCont += 1; //sideCont = sideCont + 1; (змінили сторону кута на 2) 
}*/
//sideCont - це змінна циклу
// змінна циклу повинна закінчуватися, щоб досягти закнчення циклу

//Задача
/*
У користувача є книга з pageCount сторінок
Вивести номери сторінок з 1 по останню
*/

/*let currentPage = 1; // поточна сторінка
const totalPage = 10; // загальна кількість сторінок

while(currentPage <= totalPage)// поточна сторінка меньше або доріанює загальної кількості сторінок
{
   console.log(currentPage); 
   currentPage++; // обовєязково додавати наступну сторінку, бо цикл буде нескінченний

}*/

// Вивести тільки парні номери сторінок
/*let currentPage = 1; // поточна сторінка
const totalPage = 10; // загальна кількість сторінок

while(currentPage <= totalPage)// поточна сторінка меньше або доріанює загальної кількості сторінок
{
    if(currentPage % 2 === 0){
        console.log(currentPage);} 
        
        currentPage++;
}*/

//Ввести число і вивести його в квадрат
//Перевірте щоб число було скінченим (не NaN, Infinity)
//Алгоритм
// Ввести число
// Якщо число скінченне, вивести його в квадрат
//Якщо число нескінченне, перейти на початок ввести число

/*let n = Number (prompt('введіть число'));
while(!Number.isFinite(n))// якщо число нескінченне
{
    n = Number (prompt('введіть число')); // тоді число потрібно змінювати
}
console.log(n*n);
*/

// do...wihle
 /*let n = null;
 do {
    n = Number(prompt('введіть число'))
 }while(!Number.isFinite(n))
    console.log(n*n);*/
 
    
//Вивеcти номери сторінок за допомогою do...while
let currentPage = 0; // поточна сторінка
const totalPage = 10; // загальна кількість сторінок

do{
    currentPage++;
    console.log(currentPage); // виводжу номер поточної сторінки
} while(currentPage<totalPage);



