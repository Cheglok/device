'use strict';

// Задание 1 затрачено 5 минут
const makeString = function (arr) {
  // return arr + '.'; Согласно тексту задания, города должны быть разделены запятыми, это максимально короткое решение

  return arr.join(', ') + '.'; // Согласно примеру, должны быть запятые и пробелы, приходится указать разделитель.
}
// console.log(makeString(['Colombo', 'Denpasar', 'Phuket']));


// Задание 2 затрачено 9 минут
const roundFive = function (num) {
  if (isNaN(num)) {
    console.log('Введите число');
    return;
  }
  let fullFive = Math.floor(num / 5);
  if (num % 5 >= 2.5) {
    fullFive++;
  }
  return fullFive * 5;
}
// console.log(roundFive(2.7));


// Задание 3 затрачено 35 минут
const sayCount = function (count) {
  if (!Number.isInteger(count) || count < 1) {
    console.log('Введите целое положительное число компьютеров');
    return;
  }
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
// console.log(sayCount(15));


// Задание 4 затрачено 12 минут
const isSimple = function (num) {
  if (!Number.isInteger(num)) {
    console.log('Введите целое число');
    return;
  }
  if (num <= 1) {
    return 'Число не является простым'; // единица, ноль и отрицательные числа не являются простыми
  } else if (num === 2) {
    return 'Число является простым'; // из чётных чисел только двойка является простым числом
  } else if (num % 2 === 0) {
    return 'Число не является простым'; // для сокращения операций исключим все чётные числа
  }
  for (let i = 3; i <= Math.sqrt(num); i += 2) { //
    if (num % i === 0) {
      return 'Число не является простым';
    }
  }
  return 'Число является простым';
}
// console.log(isSimple(15));


// Задание 5, затрачено 15 минут
const isContainsCouples = function (arr1, arr2) { //сложность алгоритма O(n)
  let repeats1 = {};
  let repeats2 = {};
  let result = [];

  const fillCouplesObject = function(arr, obj) { // принцип DRY
    arr.forEach(num => {
      if (!obj[num]) {
        obj[num] = 1;
      } else {
        obj[num]++;
      }
    })
  }

  fillCouplesObject(arr1, repeats1);
  fillCouplesObject(arr2, repeats2);

  for (const key in repeats1) {
    if (repeats1[key] >= 2 && repeats2[key] >= 2) {
      result.push(key);
    }
  }
  return result;
}

// console.log(isContainsCouples([7, 17, 1, 9, 1, 17, 56, 56, 23], [56, 17, 17, 1, 23, 34, 23, 1, 8, 1]));


// Задание 6, затрачен 1 час
const getMultiplicationTable = function (num) {
  if (!Number.isInteger(num) || num < 1) {
    console.log('Введите корректное значение');
    return;
  }

  const addSpaces = function (newCell, maxVal, end = false) { //Вспомогательная функция, выравнивающая сетку пробелами
    let extraSpaces = String(maxVal).length - String(newCell).length;
    if (end) {
      return newCell + ' '.repeat(extraSpaces);
    }
    return ' '.repeat(extraSpaces) + newCell
  }

  for (let i = 0; i <= num; i++) {
    let line = '';
    if (i === 0) {  // Вывод верхних заголовков
      line = addSpaces(' ', num, true);
      for (let j = 1; j <= num; j++) {
        line += ' ' + addSpaces(j, j * num);
      }
      console.log(line);
      continue;
    }
    line = addSpaces(i, num, true); // Вывод боковых заголовков, выравнивание по левому краю
    for (let j = 1; j <= num; j++) {
      let newCell = j * i;
      line += ' ' + addSpaces(newCell, j * num); // Выравнивание по правому краю
    }

    console.log(line);
  }
}
// getMultiplicationTable(15);

