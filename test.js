"use strict";
// Задание 1 23ю28 - 23ю37
// let cities = ['London', 'Hikkaduva', 'Sanur'];

const makeString = function (arr) {
  // return arr + '.'; Согласно тексту задания, города должны быть разделены запятыми, это максимально короткое решение

  return arr.join(', ') + '.'; // Согласно примеру, должны быть запятые и пробелы, приходится указать разделитель.
}

// console.log(makeString(cities));

// Задание 2 23ю39 - 23.48
const roundFive = function (num) {
  let fullFive = Math.floor(num / 5);
  if (num % 5 >= 2.5) {
    fullFive++;
  }
  return fullFive * 5;
}

// Задание 3 23.49 - 00.37
const sayCount = function (count) {
  let dozens = Math.floor((count % 100) / 10);
  let units = count % 10;

  if (units === 0 || dozens === 1 || (units >= 5 && units <= 9)) {
    return count + ' компьютеров';
  } else if (units === 1) {
    return count + ' компьютер';
  } else {
    return count + ' компьютера';
  }
}
