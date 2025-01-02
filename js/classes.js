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
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.isMale = isMale;
        this.email = email;
        this.isSubscribed = isSubscribed;
    }
    getFullName(){
        return `${this.firstname} ${this.lastname}`; 
    }
    static isUser(obj){
        return obj instanceof User;
    }
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
console.log(user1.getFullName());
