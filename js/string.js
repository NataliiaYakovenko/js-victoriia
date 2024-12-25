//string (рядки) - це псевдомасиви

const string = 'Nataliia'
console.log(string.length);
console.log(string[3])// виводжу букву через елемент

//РЯДКИ НЕ МОЖНА ЗМІНЮВАТИ
string[4] = 'L';  //НЕ ПРАВИЛЬНО
console.log(string);

const string1 = string.slice(3,8)
console.log(string1)


//методи string
//'Nataliia'.startWith('Nat') - перевірити з чого починається рядок
//'Nataliia'.endWith('ia') - перевірити чим закінчується рядок
//'Nataliia'.includes('t') - перевірити чи взагалі існує така літера в рядку, неважливо де вона вказана
//'Nataliia'.toLowerCase() -'nataliia'
//'Nataliia'.toUpperCase() - 'NATALIIA'
//--------------------------------------------------------------------
//Задача
//Написати функцію, яка за рядком 'Nataliia Yakovenko' 
//зформує рядок з ініціалами 'NY'

function getInitials(name){
    //знайти пробіл
    const spaceIndex = name.indexOf(' '); //шукає під яким індексом пробіл
    console.log(spaceIndex); //індекс пробілу
    //return 1й символ + символ після пробілу
    return name[0] + name.slice(spaceIndex+1,spaceIndex+2)
//name[0] - 1 перша літера в першому слові
//spaceIndex+1 - 1 літера після пробілу, з якої починається slice
//spaceIndex+2 - 2 літера після пробілу, з якої починається slice

}


const initials = getInitials('Nataliia Yakovenko')
console.log(initials)