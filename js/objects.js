
//Методи об'єктів
const user = {
firstName: 'Nataliia',
lastName: 'Yakovenko',
age: 41,
password: 'qwerty',
//методи
//повна версія
getFullName: function(){
    //контекст (посилання на об'єктб, для якого викликано метод, він перед крапкою при виклику)
    return `${this.firstName} ${this.lastName}`;
//метод, що перевизначає пароль
},
changePassword: function(newPassword){
    this.password = newPassword;
},

//Скорочена версія
getFullName(){
    return `${this.firstName} ${this.lastName}`;
},
changePassword(newPassword){
    this.password = newPassword;
},
}
console.log(user.getFullName());

user.changePassword = ('123456');
console.log(user);

//Змінити колір авто методом
const avto = {
    brand: 'Audi',
    model: 'Q10',
    year: 2024,
    number:'AP1410RA',
    color: 'red',
    changeColorAvto(newColorAvto){
       this.color = newColorAvto;
    }
};
avto.changeColorAvto('yellow');
console.log(avto.color);
console.log(avto);

//Перебір об'єктів for...in
//user
for(key in user){
    console.log(key);
};
for(let key in user){
    console.log(key , user[key]);
};

//avto
for(key in avto){
    console.log(key);
};
for(let key in avto){
    console.log(key,avto[key]);
}
//Варіант з шаблоним літералом
for(let key in avto){
    console.log(`${key} = ${avto[key]}`);
}

//-----------------------------

//СИНТАКС ОБСИЛЮВАНИХ ВЛАСТИВОСТЕЙ
const properti = 'firstName';
console.log(user[properti]);

const userProp = prompt('Input properti');
console.log(user[userProp]);
//_____________________________________

//Перевірка типів
console.dir(user);
console.dir(avto);
console.dir(function f(){});
//----------------------------------

//Що можна вважати властивостями об'єкта
//Вкладені об'єкти
const human = {
    name: 'Rol',
    physicalParameters: {
        haight: 1.7,
        weight: 75,
    },
}
console.log(human);
console.log(human.physicalParameters);
console.log(human.physicalParameters.haight);