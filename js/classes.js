/*function User(firstname, lastname,age,isMale,email,isSubscribed){
 this.firstname = firstname;
 this.lastname = lastname;
 this.age = age;
 this.isMale = isMale;
 this.email = email;
 this.isSubscribed = isSubscribed;
}
const userProto = {}
  userProto.getFullName = function(){
     return this.firstname +' '+ this.lastname;
  }
  //в прототипі для екземплярів
User.prototype = userProto;

//статичний метод для функції-конструктор
User.isUser = function(obj){
return obj instanceof User;// instanceof перевіряє чи є така функція конструктор в ланцюжку прототипів
}

const user1 = new User(
    'Natalia',
    'Yakovenko',
    41,
    false,
    'yakovenkonatali999@gmail.com',
    true
)
console.log(user1);
console.log(user1.getFullName())
*/
//=========================================================================================
//класи - класовий підхід
//Класи - синтаксичний цукор над вбудованими в JS
//        функціями-конструкторами і прототипами
class User{
    constructor(firstname, lastname,age,isMale,email,isSubscribed){
        this._firstname = firstname;
        this._lastname = lastname;
        this.age = age;
        this._isMale = isMale;
        this._email = email;
        this._isSubscribed = isSubscribed;
    }

    //user1.age=20
    set age(value){
        //перевірки
        if(typeof value !== 'number'){
            throw new TypeError('It is must be number')
        }
        if (value < 0 || value > 150){
            throw new RangeError('Age must be between 0 and 150')
        }
       this._age=value;
    }

    //const age = user1.age
    get age(){
        return this._age;
    }

    getFullName(){
        return `${this._firstname} ${this._lastname}`; 
    }
    static isUser(obj){
        return obj instanceof User;
    }
}
try{
    const user1 = new User(
        'Natalia',
        'Yakovenko',
        //41,
        false,
        'yakovenkonatali999@gmail.com',
        true
    )
    console.log(user1);
    console.log(user1.getFullName());
    console.log(user1.age)
    user1.age = '18';
}catch(error){
    console.log(error);
}
//-------------------------------------------------------------------------------
/*Задача
Реалізувати клас для телефонів:
марка, модель, колір, ціна, рік випуску
реалізувати метод для розрахунку віку телефона
створити екземпляр класу, викликати для нього метод
*/
class Phone{
    constructor(brand, model, color, price, year){
           this.brand = brand;
           this.model = model;
           this.color = color;
           this.price = price;
           this.year = year;
    }
    getAgePhone (){
       return new Date().getFullYear()-this.year
    }
}
const phone1 = new Phone('samsung', 'galaxy','red',200,2020) 
const phone2 = new Phone('lg', 'vortex','green',250,2022) 


console.log(phone1);
console.log(phone1.getAgePhone())

console.log(phone2);
console.log(phone2.getAgePhone())
//-------------------------------------------------------------------

//Три кити ООП(об'єктно орієнтоване програмування)

//Інкапсуляція - приховання логіки (особливостей реалізації)
class User5{
    constructor(fulname){
   [this._firstname, this._lastname]=fulname.split(' ')
    }
    set fulname(v){
        [this._firstname, this._lastname]=v.split(' ')
    }
    get fulname(){
        return this._firstname + ' ' + this._lastname;
    }
   
}
const user1 = new User5('Nataliia','Yakovenko')
user1.fulname='Nataliia Yakovenko'
console.log(user1.fulname);
//Спадкування - 

//Поліморфізм -

