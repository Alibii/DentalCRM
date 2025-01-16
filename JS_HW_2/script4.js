const input = prompt("Введите строку:");
let letters = 0, digits = 0, spaces = 0;

for (let char of input) {
  if (/[a-zA-Zа-яА-Я]/.test(char)) {
    letters++;
  } else if (/\d/.test(char)) {
    digits++;
  } else if (char === " ") {
    spaces++;
  }
}

console.log(`Количество букв: ${letters}`);
console.log(`Количество цифр: ${digits}`);
console.log(`Количество пробелов: ${spaces}`);
