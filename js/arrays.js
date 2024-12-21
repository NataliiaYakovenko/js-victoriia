// document.write  - написати розмітку на сторінці
document.write('<h1>Users list</h1>')
//-----------------------------------------------------------------
//вивести місяці на сторінку
const months =['January','February','March']
document.write('<h1>Months list</h1>')

document.write('<ul>')
for(let i = 0; i < months.length;i ++){
document.write(`<li>${months[i]}</li>`)
}
document.write('</ul>')
//------------------------------------------------------------------
//вивести користувачів на сторінку
const users =[
  {id: 1, name:'Test'},
  {id: 2, name:'Ivo'}
];
document.write('<h1>Users list</h1>');
document.write('<ul>');
for(let g = 0; g < users.length;g++){
  //виводимо кожен окремо елемент об'єкта, який є в масиві
  document.write(`<li>${users[g].id} ${users[g].name}</li>`)
}
document.write('</ul>');