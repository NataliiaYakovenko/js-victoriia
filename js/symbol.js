const symbol = Symbol("key");
console.log(symbol);

const symbol1 = Symbol("key");
console.log(symbol);

console.log(symbol === symbol1);
//--------------------------------------

const key = Symbol("key");
const options = {
  url: "http://some.address.com",
  [key]: "jhjhkahdakfhafasf",
};
console.log(options);
for (const key in options) {
  console.log(key);
}
//--------------------------------------

//symbol - для генерації унікальних даних
const THEMES = {
  LIGHT: Symbol("light"),
  DARK: Symbol("dark"),
};
const themes = THEMES.DARK;

switch (themes) {
  case THEMES.DARK:
    console.log("THEMES.DARK");
    break;
  case THEMES.LIGHT:
    console.log("THEMES.LIGHT");
    break;
  default:
    console.log("unexpacted value");
}
