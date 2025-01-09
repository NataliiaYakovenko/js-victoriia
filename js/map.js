/*Map
Колекція по ключу, яка може як ключ містити будь-який тип
*/

const map1 = new Map();
console.log(map1);
console.log(map1.size);

map1.set("firstname", "test");
console.log(map1);

//задаємо об'кт
map1.set("firstname", "Roland").set("lastname", "Symonian");
map1.set({ id: 8, name: "Nataliia" }, ["Hello", "I am fine"]);
const copyMap1 = { id: 8, name: "Nataliia" };

//отримувати
console.log(map1.get("firstname"));
console.log(copyMap1);
//---------------------------------------------------------
//has
//obj in key
console.log(map1.has("lastname"));
console.log(map1.has("age"));

const m1 = new Map();

m1.set("Olga", "+3809998877")
  .set("Boris", "+3809998866")
  .set("Vova", "+3809998855")
  .set("Tera", "+3809998844");
console.log(m1.has("Vova"));
console.log(m1.has("Jon"));

//delete obj key
m1.delete('Boris')
console.log(m1);

//clear - почистити map
//m1.clear()
//console.log(m1);


//forEach
m1.forEach((value,key)=>{console.log(key,value)})

console.log(m1.keys());

const mapKeys = [...m1.keys()]
console.log(mapKeys);
console.log(...m1.values());

//створити мапу з об'єкта
const obj ={tell1: '+380998765544',tell2:'+380887654433'}
//отримуємо масив з об'єкту
console.log(Object.entries(obj));
const m2 = new Map(Object.entries(obj))