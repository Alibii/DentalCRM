const numbers = [23, 45, 67, 12, 34, 56, 89];
let max = numbers[0];
let min = numbers[0];
let sum = 0;

for (let num of numbers) {
  if (num > max) max = num;
  if (num < min) min = num;
  sum += num;
}

const average = sum / numbers.length;

console.log(`Наибольшее число: ${max}`);
console.log(`Наименьшее число: ${min}`);
console.log(`Среднее арифметическое: ${average.toFixed(2)}`);
