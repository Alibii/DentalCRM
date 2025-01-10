const targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

while (true) {
  const userInput = prompt("Введите число от 1 до 100:");
  const guessedNumber = Number(userInput);
  attempts++;

  if (guessedNumber < targetNumber) {
    console.log("Число больше");
  } else if (guessedNumber > targetNumber) {
    console.log("Число меньше");
  } else if (guessedNumber === targetNumber) {
    console.log(`Поздравляем, вы угадали число за ${attempts} попыток!`);
    break;
  } else {
    console.log("Введите корректное число!");
  }
}
