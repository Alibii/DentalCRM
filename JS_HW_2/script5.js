function factorial(n) {
    if (n < 0) {
      return "Число должно быть положительным!";
    }
  
    let result = 1;
    let i = 1;
  
    while (i <= n) {
      result *= i;
      i++;
    }
  
    return result;
  }
  
  const num = Number(prompt("Введите положительное число:"));
  if (Number.isInteger(num) && num >= 0) {
    console.log(`Факториал числа ${num} равен ${factorial(num)}`);
  } else {
    console.log("Введите корректное положительное число!");
  }
  
