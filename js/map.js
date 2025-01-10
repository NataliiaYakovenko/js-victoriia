
//----------------------------------------------------------------------
//Практика map
//Перекладач. Словник міститься в мапі
 //1 отримати масив англомовних слів ['dog', 'run', 'white', 'cat']
  //2 по славнику, якщо є відповідний ключ, тоді отримати для ключів значення 
      //['собака', 'бігає', 'white', 'котом']
      //а якщо немає тоді залишити як є
  //3 з масива отримати рядок

const vocabulary = new Map()
vocabulary.set('dog','собака').set('cat','kit').set('run','бігати')
console.log(vocabulary);

function translateEngToUa(engPhrase){
  //1 отримати масив англомовних слів ['dog', 'run', 'white', 'cat']
  const engWords = engPhrase.split(' ')
  console.log(engWords);
  //2 по славнику, якщо є відповідний ключ, тоді отримати для ключів значення 
      //['собака', 'бігає', 'white', 'котом']
      //а якщо немає тоді залишити як є

  const uaWords = engWords.map(word=>vocabulary.has(word)?vocabulary.get(word):word)    
  console.log(uaWords);
  //3 з масива отримати рядок
const uaPhrase = uaWords.join(' ')
  return uaPhrase;
}

const engPhrase = 'dog run white cat '
const ukrPhrase =  translateEngToUa(engPhrase)
console.log(ukrPhrase);