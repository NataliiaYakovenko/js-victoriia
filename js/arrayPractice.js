//Phone: id,brand, model, year, color, isNfc, price
//Створюємо функцію конструктор і додаємо this.об'єкт
function Phone(id, brand, model, year, color, isNfc, price) {
  this.id = id;
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.color = color;
  this.isNfc = isNfc;
  this.price = price;
}
//Створюємо масив кількості телефонів
const phones = [];

const PHONE_COUNT = 100;
//перевіряємо кожен телефон через цикл
for (let i = 0; i < PHONE_COUNT; i++) {
  //створюю поточний телефон через функцію констрктор
  const phone = new Phone(
    i,
    Math.random() > 0.5 ? "Samsung" : "Redmi",
    `Series ${Math.trunc(Math.random() * 20)}`,
    2023 + Math.trunc(Math.random() * 8),
    Math.random() > 0.5 ? "red" : "green",
    Math.random() > 0.5,
    10000 + Math.trunc(Math.random() * 50000)
  );
  //через push додаємо інші 99
  phones.push(phone);
}
//параметер, який виводить масив у таблицю
console.table(phones);
//--------------------------------------------------------------------
//1 Відібрати телефони дорожче 20000грн
//використовуємо метод filter параметром якого є calback

//варіант 1
function isPrise20000(item, index, array) {
  if (item.price > 20000) {
    return true;
  } else {
    return false;
  }
}
const phones20000 = phones.filter(isPrise20000);
console.table(phones20000);

//варіант 2- скорочене рішення
function isPrise200001(item, index, array) {
  return item.price > 20000;
}
const phones200001 = phones.filter(isPrise200001);
console.table(phones200001);

//варіант 3 arrowFunction
const isPrise200002 = (item) => item.price > 20000;

const phones200002 = phones.filter(isPrise200002);
console.table(phones200002);

//варіант 4 arrowFunction прописують в методі масива
const phones200003 = phones.filter((item) => item.price > 20000);
console.table(phones200003);
//---------------------------------------------------------------------

//2. Відфільтрувати телефони 2024 року випуску
//варіант 1
function isYear2024(item) {
  if (item.year === 2024) {
    return true;
  } else {
    return false;
  }
}
const phone2024Year = phones.filter(isYear2024);
console.table(phone2024Year);

//варіант 2
function isYear20241(item) {
  return item.year === 2024;
}
const phone2024Year1 = phones.filter(isYear20241);
console.table(phone2024Year1);

//варіант 3
const isYear20242 = (item) => item.year === 2024;

const phone2024Year2 = phones.filter(isYear20242);
console.table(phone2024Year2);

//варіант 4
const phone2024Year3 = phones.filter((item) => item.year === 2024);
console.table(phone2024Year3);
//-----------------------------------------------------------------

//3.Вивести brand, model, year кожного телефону (forEach)
//варіант1
function getBrandModelYear(item) {
  console.log(
    `'brand': ${item.brand}, 'model': ${item.model}, 'year': ${item.year}`
  );
}
const brandModelYear = phones.forEach(getBrandModelYear);

//варіант2
const getBrandModelYear1 = (item) =>
  console.log(
    `'brand': ${item.brand}, 'model': ${item.model}, 'year': ${item.year}`
  );
const brandModelYear1 = phones.forEach(getBrandModelYear1);

//варіант3
const brandModelYear2 = phones.forEach((item) =>
  console.log(
    `'brand': ${item.brand}, 'model': ${item.model}, 'year': ${item.year}`
  )
);
//--------------------------------------------------------------------------------------
//4. Видалити телефон з id 10 (findeIndex, splice)
//варіант1
function getId10(item) {
  return item.id === 10;
}
const id10 = phones.findIndex(getId10);
console.log(id10);
phones.splice(10, 1);
console.log(phones);

//варіант2
const getId101 = (item) => item.id === 11;

const id11 = phones.findIndex(getId101);
console.log(id11);
phones.splice(10, 1);
console.log(phones);

//варіант3
const id12 = phones.findIndex((item) => item.id === 12);
console.log(id12);
phones.splice(10, 1);
console.log(phones);

//варіант4
/*const id12 = phones.findIndex(item =>item.id === 12)
 if(findIndex !== -1)
    phones.splice(findIndex,1)
 */
//--------------------------------------------------------------
//5 Отримати масив з телефонами ціна яких нижче на 5% від вихідної ціни
const c = phones.map((item) => {
  const phoneLess5Percent = { ...item };
  phoneLess5Percent.price = Math.round(phoneLess5Percent.price * 0.95);
  return phoneLess5Percent;
});
console.table(c);
//------------------------------------------------------------------------

// 6. Вивести бренд-модель телефонів із nfc
//варіант1
const phoneWithNfc = phones.filter(item => item.isNfc); 
phoneWithNfc.forEach((item) =>
  console.log(
    `'brand': ${item.brand}, 'model': ${item.model}, 'year': ${item.year}`
  )
);
console.log(phoneWithNfc)

//варіант2 - скорочений
phones
.filter(item => item.isNfc)
.forEach((item) =>
    console.log(
      `'brand': ${item.brand}, 'model': ${item.model}, 'year': ${item.year}`
    )
  );
//--------------------------------------------------------------------------
//7. Вивести данні про моделі Redmi 2023
//every, some
//8. Перевірити чи є золоті телефони
//9. Перевірити чи всі телефони пізніше 2024
//10.Дізнатися чи всі білі Redmi з  nfc



